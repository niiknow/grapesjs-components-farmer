import $ from 'jquery'

export default (editor, opts = {}) => {
  const commands   = editor.Commands
  const pn         = editor.Panels
  const opts_comps = opts.comps || {}

  const default_comps = {
    'comp_input': {
      label: 'Input',
      classes: 'form-group',
      useTag: 'div',
      template: `
        <label for="{{=it.name_attr}}">{{=it.label_attr}}</label>
        <input {{= it.required_attr ? 'required ' : '' }}type="{{=it.type_attr}}" class="form-control" name="{{=it.name_attr}}" placeholder="{{=it.placeholder_attr || ''}}" {{= it.value_attr ? 'value="' + it.value_attr + '"' : '' }}/>
      `
    },
    'comp_select': {
      label: 'Select',
      classes: 'form-group',
      useTag: 'div',
      template: `
        <label for="{{=it.name_attr}}">{{=it.label_attr}}</label>
        <select {{= it.multiple_attr ? 'multiple ' : '' }}{{= it.required_attr ? 'required ' : '' }}class="form-control" name="{{=it.name_attr}}">
          <option selected>-- Please select an option -- </option>
          {{~ (it.option_attr + "").trim().split("\\n") :option }}
          {{ var msgProps = option.split('::');
          }} <option value="{{= msgProps[0]}}">{{= msgProps[1] || msgProps[0] }}</option>{{~}}
        </select>
      `
    },
    'comp_textarea': {
      label: 'Textarea',
      classes: 'form-group',
      useTag: 'div',
      template: `
        <label for="{{=it.name_attr}}">{{=it.label_attr}}</label>
        <textarea {{= it.required_attr ? 'required ' : '' }}{{= it.rows_attr ? 'rows="' + it.rows_attr + '" ' : '' }}{{= it.rows_attr ? 'cols="' + it.rows_attr + '" ' : '' }}class="form-control" name="{{=it.name_attr}}" placeholder="{{=it.placeholder_attr || ''}}">{{= it.value_attr || '' }}</textarea>
      `
    },
    'comp_checkbox': {
      label: 'Checkbox',
      classes: 'form-check',
      useTag: 'div',
      template: `
        <label for="{{=it.name_attr}}" class="form-check-label">
          <input {{= it.required_attr ? 'required ' : '' }}type="checkbox" name="{{=it.name_attr}}" class="form-check-input" {{= it.value_attr ? 'value="' + it.value_attr + '"' : '' }}/>
          {{=it.label_attr}}
        </label>
      `
    },
    'comp_hidden': {
      label: 'Hidden Input',
      useTag: 'div',
      template: `
        <input {{= it.required_attr ? 'required ' : '' }}type="hidden" name="{{=it.name_attr}}" {{= it.value_attr ? 'value="' + it.value_attr + '"' : '' }}/>
      `
    },
    'comp_submit': {
      label: 'Submit Button',
      classes: 'btn btn-primary btn-block',
      useTag: 'button',
      template: '{{= it.label_attr }}'
    },
    'comp_row': {
      label: 'Row',
      useTag: 'div',
      classes: 'row'
    },
    'comp_col': {
      label: 'Column',
      useTag: 'div',
      classes: 'col'
    },
    'comp_col1': {
      label: '1 Column',
      useTag: 'div',
    },
    'comp_col2': {
      label: '2 Columns',
      useTag: 'div',
    },
    'comp_col3': {
      label: '3 Columns',
      useTag: 'div',
    }
  }

  // provide defaults
  for(let k in default_comps) {
    const x = default_comps[k]
    const y = opts_comps[k]
    if (y) {
      for(let j in y) {
        y[j] = y[j] || x[j]
      }
    } else {
      opts_comps[k] = x
    }
  }

  const options = {
    formNextId: 1,
    categoryLabel: 'Basic',
    formFieldsPrefix: 'Field',
    showStylesOnChange: 1
    , ...opts
  }

  options.comps = options.comps || opts_comps

  const compileTemplates = () => {
    let doT = null

    Object.keys(options.comps).forEach(k => {
      const t = options.comps[k]

      if (t && typeof(t.template) === 'string') {
        if (!doT) {
          doT = require('dot')
        }

        t.template = doT.template(t.template)
      }
    })
  }

  commands.add('get-usable-html', {
    run() {
      // get the builder xml
      let html = editor.getHtml()

      // convert into html
      for(let k in options.comps) {
        // default tag as div unless realTag value is provided
        const tag = options.comps[k].realTag || 'div'
        html = html.replace(new RegExp('<' + k, 'g'), '<' + tag)
        html = html.replace(new RegExp('</' + k + '>', 'g'), '</' + tag + '>')
      }

      return html
    }
  })

  // Add plugins
  require('./traits').default(editor, options)
  require('./blocks').default(editor, options)

  if (opts.panel) {
    require('./panels').default(editor, options)
  }

  editor.on('load', () => {
    compileTemplates()

    setTimeout(() => {
      const doc = editor.getWrapper().view.$el[0].ownerDocument
      var css = `
body {
  padding: 10px;
}

comp_row,
comp_col {
  min-height: 2rem !important;
}

comp_row {
  display: block;
  width: 100%;
  margin-left: 15px;
  margin-right: 15px;
}

comp_col {
  min-width: 100px;
}
`

      const head  = doc.head || doc.getElementsByTagName('head')[0]
      const style = doc.createElement('style')

      style.type = 'text/css';
      if (style.styleSheet){
        // This is required for IE8 and below.
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(doc.createTextNode(css));
      }

      head.appendChild(style);
    }, 10)
  })
}
