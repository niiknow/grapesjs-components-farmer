import cashdom from 'cash-dom'

export default (editor, opts = {}) => {
  const tm = editor.TraitManager
  const dc = editor.DomComponents
  const bm = editor.BlockManager

  const defaultType  = dc.getType('default')
  const selectType   = dc.getType('select') || defaultType
  const defaultModel = defaultType.model
  const defaultView  = defaultType.view
  const textType     = dc.getType('text')

  const fieldTraits = defaultModel.prototype.defaults.traits.concat([
    {
      type: 'text',
      name: 'name_attr',
      label: 'Name',
      placeholder: 'Enter a field name..'
    }, {
      type: 'text',
      name: 'label_attr',
      label: 'Label',
      placeholder: 'Enter a field label..'
    }
  ])

  const inputTraits = fieldTraits.concat([
    {
      type: 'text',
      name: 'value_attr',
      label: 'Value',
      changeProp: 1,
      placeholder: 'Enter a default value..'
    }, {
      type: 'text',
      name: 'placeholder_attr',
      label: 'Placeholder',
      changeProp: 1,
      placeholder: 'Enter placeholder text..'
    }, {
      type: 'checkbox',
      name: 'required_attr',
      changeProp: 1,
      label: 'Required'
    }, {
      type: 'text',
      name: 'pattern_attr',
      changeProp: 1,
      label: 'Pattern'
    }, {
      type: 'number',
      name: 'min_attr',
      changeProp: 1,
      label: 'Min'
    }, {
      type: 'number',
      name: 'max_attr',
      changeProp: 1,
      label: 'Max'
    }
  ])

  // text, password, email, number, url, tel, search, date, datetime,
  // datetime-local, month, week, time, range, or color
  // exclude: file
  const inputTypeTrait = {
    type: 'select',
    name: 'type_attr',
    label: 'Type',
    options: [
      { name: 'Text', value: 'text' },
      { name: 'Password', value: 'password' },
      { name: 'Email', value: 'email' },
      { name: 'Number', value: 'number' },
      { name: 'URL', value: 'url' },
      { name: 'Phone', value: 'tel' },
      // { name: 'Search', value: 'tel' },
      { name: 'Date', value: 'date' },
      { name: 'Date Time', value: 'datetime-local' },
      // { name: 'Month', value: 'month' },
      // { name: 'Week', value: 'week' },
      { name: 'Range', value: 'range' },
      // { name: 'Time', value: 'time' },
      { name: 'Color Picker', value: 'color' },
    ]
  }

  // advanced traits
  tm.addType('option_attr', {
    events:{
      'onchange': 'onChange'
    },

    /**
    * Returns the input element
    * @return {HTMLElement}
    */
    getInputEl: function() {
      if (!this.inputEl) {
        var input = document.createElement('textarea')
        input.value = this.target.get('option_attr')
        this.inputEl = input
      }

      return this.inputEl
    },

    /**
     * Triggered when the value of the model is changed
     */
    onValueChange: function () {
      this.target.set('option_attr', this.model.get('value'))
    }
  })

  const myDefaultModel = {
    defaults: {
      ...defaultModel.prototype.defaults,
      draggable: true,
      droppable: true,
      copyable: false,
      label_attr: 'Label'
    },
    // force regenerate of HTML
    toHTML() {
      const cf  = opts.comps[this.attributes.tagName]
      const rst = this.genHtml()
      if (cf && cf.useTag) {
        if (cf.useTag === 'innerHTML') {
          return rst.html()
        } else if (cf.useTag === 'innerText') {
          return this.genHtml()[0].innerText
        }
      }

      return this.genHtml()[0].outerHTML
    },
    getTraitValues() {
      const values = { ...this.attributes }
      this.get('traits').
        each((trait) => {
          const k = trait.get('name')
          values[k] = trait.get('value') || values[k]
        })

      return values
    },
    myInitDefaults() {
      const that   = this
      const values = { ...that.attributes }
      that.get('traits').
        each((trait) => {
          const k = trait.get('name')
          // set defaults
          if (k.indexOf('_attr') > 0) {
            trait.set('value', values[k])
          }
        })
    },
    ensureNameAttr(attrs) {
      const model = this
      const nameTrait = model.get('traits').where({name: 'name_attr'})[0]

      if (nameTrait) {
        let name = attrs.name_attr
        if (!name) {
          name = `${opts.formFieldsPrefix}${opts.formNextId++}`
          nameTrait.set('value', name)
          model.set('name_attr', name)
          return true
        }
      }

      return false
    },
    // function to use with listener
    genHtml() {
      if (!this.view || !this.view.el) {
        const el = document.createElement(this.attributes.tagName)
        return this.generateHtml(el, this.attributes.tagName)
      }

      return this.generateHtml(this.view.el, this.attributes.tagName)
    },
    generateHtml(el, k) {
      const model = this
      const $el   = cashdom(el || model.view.el)
      const attrs = model.getTraitValues()
      const $k    = $k || model.get('tagName')

      if (opts && opts.comps && opts.comps[$k]) {
        const templateFn = opts.comps[$k].template

        if (typeof(templateFn) === 'function') {
          if (!model.ensureNameAttr(attrs)) {
            $el.html(templateFn({ it: attrs || {} }))
          }
        }
      }

      return $el
    }
  }

  function createNewDefaultObject(myTemplate) {
    const dup = Object.assign({}, myDefaultModel);
    const result = Object.assign(dup, myTemplate);
    result.init = myTemplate.init;
    return result;
  }

  // override default view to generate html
  const myDefaultView = defaultView.extend({
    onRender() {
      if (this.model.genHtml) {
        this.model.genHtml()
      }

      return this
    }
  })

  // BEGIN: components
  dc.addType('comp_input', {
    model: createNewDefaultObject({
      defaults: {
        ...myDefaultModel.defaults,
        draggable: true,
        droppable: false,
        copyable: false,
        tagName: 'comp_input',
        type_attr: 'text',
        traits: inputTraits.concat(inputTypeTrait),
        classes: ['comp_input'].concat(opts.comps.comp_input.classes)
      },
      init() {
        const that = this
        that.myInitDefaults()

        that.listenTo(that, 'change:label_attr', that.genHtml)
        that.listenTo(that, 'change:name_attr', that.genHtml)
        that.listenTo(that, 'change:placeholder_attr', that.genHtml)
      }
    }),
    view: myDefaultView
  })

  // Select Box
  dc.addType('comp_select', {
    model: createNewDefaultObject({
      defaults: {
        ...myDefaultModel.defaults,
        draggable: true,
        droppable: false,
        copyable: false,
        tagName: 'comp_select',
        option_attr: 'MN::Minnesota\nTX::Texas',
        label_attr: 'Select',
        traits: [
          {
            type: 'option_attr'
          }, {
            type: 'checkbox',
            name: 'required_attr',
            changeProp: 1,
            label: 'Required'
          }, {
            type: 'checkbox',
            name: 'multiple_attr',
            changeProp: 1,
            label: 'Multiple'
          }
        ].concat(fieldTraits),
        classes: ['comp_select'].concat(opts.comps.comp_select.classes)
      },
      init() {
        const that = this
        that.myInitDefaults()

        that.listenTo(that, 'change:label_attr', that.genHtml)
        that.listenTo(that, 'change:name_attr', that.genHtml)
        that.listenTo(that, 'change:multiple_attr', that.genHtml)
        that.listenTo(that, 'change:option_attr', that.genHtml)
      }
    }),
    view: myDefaultView
  })

  dc.addType('comp_textarea', {
    model: createNewDefaultObject({
      defaults: {
        ...defaultModel.prototype.defaults,
        draggable: true,
        droppable: false,
        copyable: false,
        tagName: 'comp_textarea',
        label_attr: 'Message',
        traits: [
          {
            type: 'checkbox',
            name: 'required_attr',
            changeProp: 1,
            label: 'Required'
          }, {
            type: 'text',
            name: 'placeholder_attr',
            label: 'Placeholder',
            changeProp: 1,
            placeholder: 'Enter placeholder text..'
          }, {
            type: 'number',
            name: 'rows_attr',
            label: 'Rows',
            changeProp: 1,
            placeholder: 'Enter field rows/line-height..'
          }, {
            type: 'number',
            name: 'cols_attr',
            label: 'Columns',
            changeProp: 1,
            placeholder: 'Enter field columns/width..'
          },
        ].concat(fieldTraits),
        classes: ['comp_textarea'].concat(opts.comps.comp_textarea.classes)
      },
      init() {
        const that = this
        that.myInitDefaults()

        that.listenTo(that, 'change:label_attr', that.genHtml)
        that.listenTo(that, 'change:name_attr', that.genHtml)
        that.listenTo(that, 'change:placeholder_attr', that.genHtml)
        that.listenTo(that, 'change:cols_attr', that.genHtml)
        that.listenTo(that, 'change:rows_attr', that.genHtml)
      }
    }),
    view: myDefaultView
  })

  dc.addType('comp_file', {
    model: createNewDefaultObject({
      defaults: {
        ...defaultModel.prototype.defaults,
        draggable: true,
        droppable: false,
        copyable: false,
        tagName: 'comp_file',
        label_attr: 'Choose file...',
        traits: [
          {
            type: 'checkbox',
            name: 'required_attr',
            changeProp: 1,
            label: 'Required'
          }, {
            type: 'text',
            name: 'placeholder_attr',
            label: 'Placeholder',
            changeProp: 1,
            placeholder: 'Enter placeholder text..'
          }, {
            type: 'string',
            name: 'accept_attr',
            label: 'Accept',
            changeProp: 1,
            placeholder: 'image/jpeg, image/png, image/gif'
          },
        ].concat(fieldTraits),
        classes: ['comp_file'].concat(opts.comps.comp_file.classes)
      },
      init() {
        const that = this
        that.myInitDefaults()

        that.listenTo(that, 'change:label_attr', that.genHtml)
        that.listenTo(that, 'change:name_attr', that.genHtml)
        that.listenTo(that, 'change:placeholder_attr', that.genHtml)
        that.listenTo(that, 'change:accept_attr', that.genHtml)
      }
    }),
    view: myDefaultView
  })

  dc.addType('comp_checkbox', {
    model: createNewDefaultObject({
      defaults: {
        ...myDefaultModel.defaults,
        draggable: true,
        droppable: false,
        copyable: false,
        tagName: 'comp_checkbox',
        label_attr: 'I accept the terms and use',
        traits: [
          {
            type: 'checkbox',
            name: 'required_attr',
            changeProp: 1,
            label: 'Required'
          }
        ].concat(fieldTraits),
        classes: ['comp_checkbox'].concat(opts.comps.comp_checkbox.classes)
      },
      init() {
        const that = this
        that.myInitDefaults()

        that.listenTo(that, 'change:label_attr', that.genHtml)
        that.listenTo(that, 'change:name_attr', that.genHtml)
      }
    }),
    view: myDefaultView
  })

  dc.addType('comp_hidden', {
    model: createNewDefaultObject({
      defaults: {
        ...myDefaultModel.defaults,
        draggable: true,
        droppable: false,
        copyable: false,
        tagName: 'comp_hidden',
        traits: [{
          type: 'text',
          name: 'name_attr',
          label: 'Name',
          changeProp: 1,
          placeholder: 'Enter a field name...'
        }],
        classes: ['comp_hidden'].concat(opts.comps.comp_hidden.classes)
      },
      init() {
        const that = this
        that.myInitDefaults()

        that.listenTo(that, 'change:name_attr', that.genHtml)
      }
    }),
    view: myDefaultView
  })

  dc.addType('comp_submit', {
    model: createNewDefaultObject({
      defaults: {
        ...myDefaultModel.defaults,
        draggable: true,
        droppable: false,
        copyable: false,
        tagName: 'comp_submit',
        label_attr: 'Send',
        traits: defaultModel.prototype.defaults.traits.concat([
          {
            type: 'text',
            name: 'label_attr',
            label: 'Label',
            placeholder: 'Enter a field label..'
          }
        ]),
        classes: ['comp_submit'].concat(opts.comps.comp_submit.classes)
      },
      init() {
        const that = this
        that.myInitDefaults()

        that.listenTo(that, 'change:label_attr', that.genHtml)
      }
    }),
    view: myDefaultView
  })

  dc.addType('comp_row', {
    model: {
      defaults: {
        ...defaultModel.prototype.defaults,
        tagName: 'comp_row',
        // Can be dropped inside other elements
        draggable: true,
        copyable: false,
        // Can drop other elements inside it
        droppable: 'comp_col',
        classes: ['comp_row'].concat(opts.comps.comp_row.classes)
      }
    },
    view: defaultView
  })

  dc.addType('comp_col', {
    model: {
      defaults: {
        ...defaultModel.prototype.defaults,
        tagName: 'comp_col',
        // Can be dropped only inside `row` elements
        draggable: 'comp_row',
        // Can drop other elements inside it
        droppable: true,
        copyable: false,
        classes: ['comp_col'].concat(opts.comps.comp_col.classes)
      }
    },
    view: defaultView
  })

  dc.addType('comp_recaptcha', {
    model: createNewDefaultObject({
      defaults: {
        ...myDefaultModel.defaults,
        draggable: true,
        droppable: false,
        copyable: false,
        tagName: 'comp_recaptcha',
        traits: defaultModel.prototype.defaults.traits.concat([
          {
            type: 'text',
            name: 'sitekey_attr',
            label: 'Site key',
            placeholder: 'V2 checkbox key'
          }
        ]),
        classes: ['comp_recaptcha'].concat(opts.comps.comp_recaptcha.classes)
      },
      init() {
        const that = this
        that.myInitDefaults()

        that.listenTo(that, 'change:sitekey_attr', that.genHtml)
      }
    }),
    view: myDefaultView
  })

  dc.addType('comp_stripe', {
    model: createNewDefaultObject({
      defaults: {
        ...myDefaultModel.defaults,
        draggable: true,
        droppable: false,
        copyable: false,
        tagName: 'comp_stripe',
        hidepostal_attr: 'false',
        traits: defaultModel.prototype.defaults.traits.concat([
          {
            type: 'text',
            name: 'publickey_attr',
            label: 'Public key',
            placeholder: 'e.g. stripe public key'
          },
          {
            type: 'checkbox',
            name: 'hidepostal_attr',
            label: 'Hide postal'
          }
        ]),
        classes: ['comp_stripe'].concat(opts.comps.comp_recaptcha.classes)
      },
      init() {
        const that = this
        that.myInitDefaults()

        that.listenTo(that, 'change:publickey_attr', that.genHtml)
      }
    }),
    view: myDefaultView
  })
}
