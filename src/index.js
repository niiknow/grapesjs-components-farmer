import $ from 'jquery'
import _template from 'lodash.template'
import grapesjs from 'grapesjs'

export default grapesjs.plugins.add('grapesjs-components-farmer', (editor, opts = {}) => {
  const commands   = editor.Commands
  const pn         = editor.Panels
  const opts_comps = opts.comps || {}

  const default_comps = {
    'comp_input': {
      label: 'Input',
      classes: 'form-group',
      useTag: 'div',
      template: `
        <label for="<%=it.name_attr%>"><%=it.label_attr%></label>
        <input <%= it.required_attr ? 'required ' : '' %>type="<%=it.type_attr%>" class="form-control" name="<%=it.name_attr%>" placeholder="<%=it.placeholder_attr || ''%>" <%= it.value_attr ? 'value="' + it.value_attr + '"' : '' %>/>
      `
    },
    'comp_select': {
      label: 'Select',
      classes: 'form-group',
      useTag: 'div',
      template: `
        <label for="<%=it.name_attr%>"><%=it.label_attr%></label>
        <select <%= it.multiple_attr ? 'multiple ' : '' %><%= it.required_attr ? 'required ' : '' %>class="form-control" name="<%=it.name_attr%>">
          <option selected>-- Please select an option -- </option>
          <% (it.option_attr + "").trim().split("\\n").forEach(function(option){ %>
          <% var msgProps = option.split('::');
          %> <option value="<%= msgProps[0]%>"><%= msgProps[1] || msgProps[0] %></option>
          <% }); %>
        </select>
      `
    },
    'comp_file': {
      label: 'File',
      classes: 'custom-file',
      useTag: 'div',
      template: `
        <input <%= it.required_attr ? 'required ' : '' %>type="file" class="custom-file-input" name="<%=it.name_attr%>" placeholder="<%=it.placeholder_attr || ''%>" <%= it.accept_attr ? 'accept="' + it.accept_attr + '"' : '' %> <%= it.value_attr ? 'value="' + it.value_attr + '"' : '' %>/>
        <label for="<%=it.name_attr%>" class="custom-file-label"><%=it.label_attr%></label>
      `
    },
    'comp_textarea': {
      label: 'Textarea',
      classes: 'form-group',
      useTag: 'div',
      template: `
        <label for="<%=it.name_attr%>"><%=it.label_attr%></label>
        <textarea <%= it.required_attr ? 'required ' : '' %><%= it.rows_attr ? 'rows="' + it.rows_attr + '" ' : '' %><%= it.rows_attr ? 'cols="' + it.rows_attr + '" ' : '' %>class="form-control" name="<%=it.name_attr%>" placeholder="<%=it.placeholder_attr || ''%>"><%= it.value_attr || '' %></textarea>
      `
    },
    'comp_checkbox': {
      label: 'Checkbox',
      classes: 'form-check',
      useTag: 'div',
      template: `
        <label for="<%=it.name_attr%>" class="form-check-label">
          <input <%= it.required_attr ? 'required ' : '' %>type="checkbox" name="<%=it.name_attr%>" class="form-check-input" <%= it.value_attr ? 'value="' + it.value_attr + '"' : '' %>/>
          <%=it.label_attr%>
        </label>
      `
    },
    'comp_hidden': {
      label: 'Hidden Input',
      useTag: 'div',
      template: `
        <input <%= it.required_attr ? 'required ' : '' %>type="hidden" name="<%=it.name_attr%>" <%= it.value_attr ? 'value="' + it.value_attr + '"' : '' %>/>
      `
    },
    'comp_submit': {
      label: 'Submit Button',
      classes: 'btn btn-primary btn-block',
      useTag: 'button',
      template: '<%= it.label_attr %>'
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
    },
    'comp_text': {
      label: 'Text'
    },
    'comp_image': {
      label: 'Image'
    },
    'comp_map': {
      label: 'Map'
    },
    'comp_recaptcha': {
      label: 'reCaptcha',
      classes: 'form-group',
      template: `
        <script src="https://www.google.com/recaptcha/api.js?render=<%= it.sitekey_attr %>"></script>
        <input type="hidden" name="g-recaptcha-response" id="g-recaptcha-response" data-sitekey="<%= it.sitekey_attr || '' %>" data-action="<%= it.action_attr || '' %>" />
      `
    },
    'comp_stripe': {
      label: 'Payment',
      classes: 'form-group',
      template: `
        <script src="https://js.stripe.com/v3/"></script>
        <div id="stripeElement" data-key="<%= it.publickey_attr || '' %>" data-hide-postal="<%= it.hidepostal_attr || 'false' %>">&nbsp;</div>
      `
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
      opts_comps[k] = y
    } else {
      opts_comps[k] = x
    }

    opts_comps[k]['classes'] = (opts_comps[k]['classes'] || '').split(' ')
  }

  const options = {
    formNextId: 1,
    categoryLabel: 'Basic',
    formFieldsPrefix: 'field',
    showStylesOnChange: 1,
    addResource: (url, type='script') => {

      const doc    = editor.Canvas.getDocument()
      const head   = doc.head || doc.getElementsByTagName('head')[0]
      const res    = document.createElement(type)

      if (type === 'script') {
        res.src = url
      }
      else if (type === 'link') {
        res.rel    = 'stylesheet'
        res.href   = url
      }

      head.appendChild(res)
    }, ...opts
  }

  options.comps = options.comps || opts_comps

  const compileTemplates = () => {
    Object.keys(options.comps).forEach(k => {
      const t = options.comps[k]

      if (t && typeof(t.template) === 'string') {
        t.template = _template(t.template)
      }
    })
  }

  /** Prevent Input Default Actions **/
  const preventInputDefaults = () => {
    const el     = editor.Canvas.getBody()
    const win    = el.ownerWindow
    const body = $(el)

    body.click((e) => {
      const event  = e || win.event
      const target = event.target || event.srcElement
      const tagName = (target.tagName + '').toLowerCase()
      if (tagName === 'input') {
        event.preventDefault()
        return false
      }
    })
  }

  commands.add('get-usable-html', {
    run() {
      // get the builder xml
      let html = editor.getHtml()

      // convert into html
      for(let k in options.comps) {
        // default tag as div unless useTag value is provided
        const tag = options.comps[k].useTag || 'div'
        html = html.replace(new RegExp('<' + k, 'g'), '<' + tag)
        html = html.replace(new RegExp('</' + k + '>', 'g'), '</' + tag + '>')
        html = html.replace(new RegExp(` data\-gjs\-type\=\"${k}\" `, 'g'), ' ')
        html = html.replace(new RegExp(' data\-highlightable\=\"1\" ', 'g'), ' ')
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
      const doc  = editor.Canvas.getDocument()
      const head = doc.head || doc.getElementsByTagName('head')[0]
      var css    = `
body {
  padding: 10px;
}

comp_recaptcha,
comp_row,
comp_col,
comp_hidden {
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

comp_hidden, comp_recaptcha, comp_stripe {
  display: block;
  width: 100%;
  min-width: 100%;
}
`

      const style = doc.createElement('style')

      style.type = 'text/css'
      if (style.styleSheet){
        // This is required for IE8 and below.
        style.styleSheet.cssText = css
      } else {
        style.appendChild(doc.createTextNode(css))
      }

      head.appendChild(style)
      preventInputDefaults()
    }, 10)
  })
})
