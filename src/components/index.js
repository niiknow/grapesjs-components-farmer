import loadFormField from './FormField'

export default (editor, opt = {}) => {
  let domc = editor.DomComponents
  let defaultType = domc.getType('default')
  let textType = domc.getType('text')
  let imageType = domc.getType('image')
  let linkType = domc.getType('link')
  let defaultModel = defaultType.model
  let defaultView = defaultType.view
  let textModel = textType.model
  let textView = textType.view
  let imageModel = imageType.model
  let imageView = imageType.view
  let linkModel = linkType.model
  let linkView = linkType.view
  const dc = domc
  const ComponentsView = domc.ComponentsView
  const sandboxEl = document.createElement('div')



  // Core model
  let coreModel = {
    init() {
      const attrs = { ...this.get('attributes') }
      const style = { ...this.get('style') }

      for (let prop in style) {
        if (!(prop in attrs)) {
          attrs[prop] = style[prop]
        }
      }

      this.set('attributes', attrs)
      this.set('style', attrs)
      this.listenTo(this, 'change:style', this.handleStyleChange)
    },


    handleStyleChange() {
      const style = { ...this.get('attributes'), ...this.get('style') }
      this.set('attributes', style)
    },


    getCoreAttributes() {
      let attr = this.get('attributes') || {}
      delete attr.style
      let src = this.get('src')
      if(src)
        attr.src = src
      return attr
    },


    /**
     * This will avoid rendering default attributes
     * @return {Object}
     */
    getAttrToHTML() {
      const attr = { ...this.get('attributes') }
      const style = { ...this.get('style-default') }
      delete attr.style

      for (let prop in attr) {
        const value = attr[prop]

        if (value && value === style[prop]) {
          delete attr[prop]
        }
      }

      return attr
    },


    /**
     * Rhave to change few things for hte MJML's xml (no id, style, class)
     */
    toHTML(opts) {
      let code = ''
      let model = this
      let tag = model.get('tagName'),
      sTag = model.get('void')

      // Build the string of attributes
      let strAttr = ''
      let attr = this.getAttrToHTML()
      for (let prop in attr) {
        let val = attr[prop]
        strAttr += typeof val !== undefined && val !== '' ?
          ' ' + prop + '="' + val + '"' : ''
      }

      code += `<${tag}${strAttr}${sTag ? '/' : ''}>` + model.get('content')

      model.get('components').each((model) => {
        code += model.toHTML()
      })

      if(!sTag)
        code += `</${tag}>`

      return code
    },

  }





  // MJML Core view
  let coreView = {

    init() {
      this.stopListening(this.model, 'change:style')
      this.listenTo(this.model, 'change:attributes change:src', this.rerender)
    },


    rerender() {
      this.render(null, null, {}, 1)
    },


    getTemplateFromEl(sandboxEl) {
      return sandboxEl.firstChild.innerHTML
    },


    /**
     * Render children components
     * @private
     */
    renderChildren: function(appendChildren) {
      var container = this.getChildrenContainer()

      // This trick will help perfs by caching children
      if (!appendChildren) {
        this.componentsView = new ComponentsView({
          collection: this.model.get('components'),
          config: this.config,
          defaultTypes: this.opts.defaultTypes,
          componentTypes: this.opts.componentTypes,
        })
        this.childNodes = this.componentsView.render(container).el.childNodes
      } else {
        this.componentsView.parent = container
      }

      var childNodes = Array.prototype.slice.call(this.childNodes)

      for (var i = 0, len = childNodes.length  i < len i++) {
        container.appendChild(childNodes.shift())
      }

      if (container !== this.el) {
        var disableNode = function(el) {
          var children = Array.prototype.slice.call(el.children)
          children.forEach(function (el) {
            el.style['pointer-events'] = 'none'
            if (container !== el) {
              disableNode(el)
            }
          })
        }
        disableNode(this.el)
      }
    },


    renderStyle() {
      this.el.style = this.attributes.style
    },


    renderContent() {
      let content = this.model.get('content')

      if (content) {
        this.getChildrenContainer().innerHTML = content
      }
    },


    render(p, c, opts, appendChildren) {
      this.renderAttributes()
      // this.el.innerHTML = this.getTemplateFromMjml()
      // simply render the html here
      this.renderContent()
      this.renderChildren(appendChildren)
      this.childNodes = this.getChildrenContainer().childNodes
      this.renderStyle()
      return this
    }
  }





  const compOpts = {
      dc, coreModel, coreView, opt, sandboxEl, defaultModel, defaultView,
      textModel, textView, linkModel, linkView, imageModel, imageView
  }

  loadFormField(editor, compOpts)
}
