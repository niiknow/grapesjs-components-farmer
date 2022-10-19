import _template from 'lodash.template'
import grapesjs from 'grapesjs'
import cashdom from 'cash-dom'

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
        <input <%= it.required_attr ? 'required ' : '' %>type="<%=it.type_attr%>" class="form-control" id="<%=it.name_attr%>" name="<%=it.name_attr%>" placeholder="<%=it.placeholder_attr || ''%>" <%= it.value_attr ? 'value="' + it.value_attr + '"' : '' %>/>
      `
    },
    'comp_select': {
      label: 'Select',
      classes: 'form-group',
      useTag: 'div',
      template: `
        <label for="<%=it.name_attr%>"><%=it.label_attr%></label>
        <select <%= it.multiple_attr ? 'multiple ' : '' %><%= it.required_attr ? 'required ' : '' %>class="form-control" id="<%=it.name_attr%>" name="<%=it.name_attr%>">
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
        <input <%= it.required_attr ? 'required ' : '' %>type="file" class="custom-file-input" id="<%=it.name_attr%>" name="<%=it.name_attr%>" placeholder="<%=it.placeholder_attr || ''%>" <%= it.accept_attr ? 'accept="' + it.accept_attr + '"' : '' %> <%= it.value_attr ? 'value="' + it.value_attr + '"' : '' %>/>
        <label for="<%=it.name_attr%>" class="custom-file-label"><%=it.label_attr%></label>
      `
    },
    'comp_textarea': {
      label: 'Textarea',
      classes: 'form-group',
      useTag: 'div',
      template: `
        <label for="<%=it.name_attr%>"><%=it.label_attr%></label>
        <textarea <%= it.required_attr ? 'required ' : '' %><%= it.rows_attr ? 'rows="' + it.rows_attr + '" ' : '' %><%= it.rows_attr ? 'cols="' + it.rows_attr + '" ' : '' %>class="form-control" id="<%=it.name_attr%>" name="<%=it.name_attr%>" placeholder="<%=it.placeholder_attr || ''%>"><%= it.value_attr || '' %></textarea>
      `
    },
    'comp_checkbox': {
      label: 'Checkbox',
      classes: 'form-check',
      useTag: 'div',
      template: `
        <label for="<%=it.name_attr%>" class="form-check-label">
          <input <%= it.required_attr ? 'required ' : '' %>type="checkbox" id="<%=it.name_attr%>" name="<%=it.name_attr%>" class="form-check-input" <%= it.value_attr ? 'value="' + it.value_attr + '"' : '' %>/>
          <%=it.label_attr%>
        </label>
      `
    },
    'comp_hidden': {
      label: 'Hidden Input',
      useTag: 'div',
      template: `
        <input <%= it.required_attr ? 'required ' : '' %>type="hidden" id="<%=it.name_attr%>" name="<%=it.name_attr%>" <%= it.value_attr ? 'value="' + it.value_attr + '"' : '' %>/>
      `
    },
    'comp_submit': {
      label: 'Submit Button',
      classes: 'btn btn-primary w-100',
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
        <input type="hidden" name="g-recaptcha-response" id="g-recaptcha-response">
        <div id="g-recaptcha" class="g-recaptcha" data-sitekey="<%= it.sitekey_attr || '' %>"></div><br />
        <script type="text/javascript" src="https://www.google.com/recaptcha/api.js" async defer></script>
      `
    },
    'comp_stripe': {
      label: 'Payment',
      classes: 'form-group',
      template: `
        <script type="text/javascript" src="https://js.stripe.com/v3/"></script>
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
    const el   = editor.Canvas.getBody()
    const win  = el.ownerWindow
    const body = cashdom(el)

    body.on('click', (e) => {
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

comp_recaptcha {
  background: url(data:image/png;base64,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6aWXyn777SdXXHGF2vP8YROs529y9HnmzJkj9913n5IKJEXuJRrU/PnztRh+Acjktttu0/p33nmnEhsaFw8ChIB4dV03or4mTpyobU+aNEkauDezQEhXX311VInNq/SFaznyyCNl4cKFem5Muj59+siLL76opunll18uRx99dORhpPZDDz2kfi9MBPp3wgknRE7KMcr/8MMP+uHY3Xffrcd931mCjX+II5VtJe0QgEiI44Jo0KJwtLPtxd9DljyffNCqICuW1GOfL0c9zhld/u+VK4Tn3h/TlSR9bROaVyyWjz76qFx00UW6m+TyyZNd3ta8eapt/fTTT7L//vvLd999J/3794+tqtuvvvqqHHTQQXqDiUj++OOPBaIYNWqUzoKB1sT+MWPG6FD06NGj5ZFHHtFAQAYPKFuZ2Yi2BNFCkPziEXtz8cUX63bz5s0r7ctnn30WSZDv2bOnkieaFyNJaFGQEb6uU045ReujTaFlcn4GMc4880zVAnlIb7rpJkGruv3227Us5DZy5EgZMmSIXhvXxYgT12mS/ghAMhBL586dZbfddtPnHJ8VmjxExj2P1pSiScofY190Gb8fElyzZq2OVnbs2DElYGwTmlcssphLXjAbubHeTNx99931EERSlXgzEbt/r732kgULFmjRCRMmyODBgyORysxDhvaChlYbgUjQtDBNr7nmGiUd6jFyWpWgJSIrV66UX3/9VduHuJC8vDz19X3//fe6zReaGcSFHHbYYbocP368+i/YwKT24gkPZ61J/UMADblZs2b6fNN7fpRzc5tLodOseHZ5TqIJK5qk/Lpf+qunDuQHCbZs2ULP6Y8le7lNklc0yLE3J3Y7umxN65hvsb9CrVu3VqdnTXU5jqbEryQaEVHPtQke9OeFvBDqeeFBa9WqlQ5r+33RSxyxyJ9//hlR/T2Js99PAsmwuEn9Q2CXXXZRt0U0Qe27bx/9oeaeYkoykIWvi+e+ug8/eDwvaGwQF885PtZUyjZPXlsTfMw8BgKi5aOPPhK0u9rIPffcI/369VMH/LXXXqsO89rUo0z79u21KFqUF3xtaGNeU2Q/fgwvDA4gmM486Ajao5dvvvlGV+tCor6uLVOPAAGokE7sD3L3bt30nu+0005KRPiC0dIo27BhQ9XK0MxwyLOPY/jACJtg8CnPafTeQknlVW6TPq9EAY7z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) no-repeat left;
  height: 70px;
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
    }, 0)
  })
})
