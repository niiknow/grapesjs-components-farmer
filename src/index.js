import doT from 'dot'
import $ from 'jquery'

export default (editor, opts = {}) => {
  const commands = editor.Commands
  const pn       = editor.Panels

  const opts_labels     = opts.labels || {}
  const opts_comps      = opts.comps || {}

  delete opts['labels']
  delete opts['comps']

  const default_comps = {
    'comp_input': {
      classes: 'form-group',
      template: `
        <label for="{{=it.name_attr}}">{{=it.label_attr}}</label>
        <input {{= it.required_attr ? 'required ' : '' }}type="{{=it.type_attr}}" class="form-control" name="{{=it.name_attr}}" placeholder="{{=it.placeholder_attr || ''}}" {{= it.value_attr ? 'value="' + it.value_attr + '"' : '' }}/>
      `
    },
    'comp_select': {
      classes: 'form-group',
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
      classes: 'form-group',
      template: `
        <label for="{{=it.name_attr}}">{{=it.label_attr}}</label>
        <textarea {{= it.required_attr ? 'required ' : '' }}{{= it.rows_attr ? 'rows="' + it.rows_attr + '" ' : '' }}{{= it.rows_attr ? 'cols="' + it.rows_attr + '" ' : '' }}class="form-control" name="{{=it.name_attr}}" placeholder="{{=it.placeholder_attr || ''}}">{{= it.value_attr || '' }}</textarea>
      `
    },
    'comp_checkbox': {
      classes: 'form-check',
      template: `
        <label for="{{=it.name_attr}}" class="form-check-label">
          <input {{= it.required_attr ? 'required ' : '' }}type="checkbox" name="{{=it.name_attr}}" class="form-check-input" {{= it.value_attr ? 'value="' + it.value_attr + '"' : '' }}/>
          {{=it.label_attr}}
        </label>
      `
    },
    'comp_hidden': {
      template: `
        <input {{= it.required_attr ? 'required ' : '' }}type="hidden" name="{{=it.name_attr}}" {{= it.value_attr ? 'value="' + it.value_attr + '"' : '' }}/>
      `
    },
    'comp_submit': {
      classes: 'btn btn-primary btn-block',
      realTag: 'button',
      template: '{{= it.label_attr }}'
    },
    'comp_row': {
      classes: 'row'
    },
    'comp_col': {
      classes: 'col'
    }
  }

  const default_labels = {
    // FORMS
    'comp_input': 'Input',
    'comp_submit': 'Submit',
    'comp_textarea': 'Textarea',
    'comp_select': 'Select',
    'comp_checkbox': 'Checkbox',
    'comp_hidden': 'Hidden Input',
    'comp_row': 'Row',
    'comp_col': 'Column',
    'comp_col1': '1 Column',
    'comp_col2': '2 Columns',
    'comp_col3': '3 Columns'
  }

  const options = {
    labels: Object.assign(default_labels, opts_labels),
    comps: Object.assign(default_comps, opts_comps)
    , ...opts
  }

  options.formNextId = opts.formNextId || 1
  options.categoryLabel = opts.categoryLabel || 'Basic'
  options.formFieldsPrefix = opts.formFieldsPrefix || 'Field'

  commands.add('compile-templates', () => {
    Object.keys(options.comps).forEach(k => {
      const t = options.comps[k]

      if (t && typeof(t.template) === 'string') {
        t.template = doT.template(t.template)
      }
    })
  })

  commands.add('get-real-html', () => {
    // get the builder xml
    let html = editor.getHtml()

    // convert into html
    for(let k in opts.comps) {
      // default tag as div unless realTag value is provided
      const tag = comps[k].realTag || 'div'
      html = html.replace(new RegExp('<' + k, 'g'), '<' + tag)
      html = html.replace(new RegExp('</' + k + '>', 'g'), '</' + tag + '>')
    }

    return html
  })

  // Add plugins
  require('./traits').default(editor, options)
  require('./blocks').default(editor, options)
  if (opts.panel) {
    require('./panels').default(editor, options)
  }

  editor.on('load', () => {
    editor.runCommand('compile-templates', options)
    setTimeout(() => {
      const body = editor.getWrapper().view.$el.parent('body')
      body.addClass('components-farmer')
    }, 1000)
  })
}
