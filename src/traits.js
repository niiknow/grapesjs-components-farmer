import $ from 'jquery'

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

  const myDefaultModel = defaultModel.extend({
    defaults: {
      ...defaultModel.prototype.defaults,
      draggable: true,
      droppable: true,
      copyable: false,
      label_attr: 'Label'
    },
    // force regenerate of HTML
    toHTML() {
      let html = ''
      if (!this.view.el) {
        const el = document.createElement(this.attributes.tagName)

        html = this.generateHtml(el)[0].outerHTML
      }

      html = this.generateHtml()[0].outerHTML

      return html
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
    ensureNameAttr(attrs) {
      const model = this
      const nameTrait = model.get('traits').where({name: 'name_attr'})[0]

      if (nameTrait) {
        let name = attrs.name_attr
        if (!name) {
          name = `${opts.formFieldsPrefix}${opts.formNextId++}`

          nameTrait.set('value', name)
          model.setAttributes({ name_attr: name })
        }

        // this ensure name value exists and is correct on the UI
        attrs.name_attr = name
      }
    },
    generateHtml(el = this.view.el, k = this.attributes.tagName) {
      const model = this
      const $el   = $(el || this.view.el)
      const attrs = this.getTraitValues()
      const $k    = $k || model.get('tagName')

      if (opts && opts.comps && opts.comps[$k]) {
        const templateFn = opts.comps[$k].template

        if (typeof(templateFn) === 'function') {
          model.ensureNameAttr(attrs)
          $el.empty()
          $el.append(templateFn(attrs))
        }
      }

      return $el
    }
  })

  // override default view to generate html
  const myDefaultView = defaultView.extend({
    onRender() {
      if (this.model.generateHtml) {
        this.model.generateHtml()
      }

      return this
    }
  })

  // BEGIN: components
  dc.addType('comp_input', {
    model: myDefaultModel.extend({
      defaults: {
        ...myDefaultModel.prototype.defaults,
        draggable: true,
        droppable: false,
        copyable: false,
        tagName: 'comp_input',
        type_attr: 'text',
        traits: inputTraits.concat(inputTypeTrait),
        classes: ('comp_input ' + (opts.comps.comp_input.classes || '')).split(' ')
      },
      init() {
        const that = this

        that.listenTo(that, 'change:label_attr', that.generateHtml)
        that.listenTo(that, 'change:name_attr', that.generateHtml)
        that.listenTo(that, 'change:placeholder_attr', that.generateHtml)
      }
    }),
    view: myDefaultView
  })

  // Select Box
  dc.addType('comp_select', {
    model: myDefaultModel.extend({
      defaults: {
        ...myDefaultModel.prototype.defaults,
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
        classes: ('comp_select ' + (opts.comps.comp_select.classes || '')).split(' ')
      },
      init() {
        const that = this

        that.listenTo(that, 'change:label_attr', that.generateHtml)
        that.listenTo(that, 'change:name_attr', that.generateHtml)
        that.listenTo(that, 'change:multiple_attr', that.generateHtml)
        that.listenTo(that, 'change:option_attr', that.generateHtml)
      }
    }),
    view: myDefaultView
  })

  dc.addType('comp_textarea', {
    model: myDefaultModel.extend({
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
        classes: ('comp_textarea ' + (opts.comps.comp_textarea.classes || '')).split(' ')
      },
      init() {
        const that = this

        that.listenTo(that, 'change:label_attr', that.generateHtml)
        that.listenTo(that, 'change:name_attr', that.generateHtml)
        that.listenTo(that, 'change:placeholder_attr', that.generateHtml)
        that.listenTo(that, 'change:cols_attr', that.generateHtml)
        that.listenTo(that, 'change:rows_attr', that.generateHtml)
      }
    }),
    view: myDefaultView
  })

  dc.addType('comp_checkbox', {
    model: myDefaultModel.extend({
      defaults: {
        ...myDefaultModel.prototype.defaults,
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
        classes: ('comp_checkbox ' + (opts.comps.comp_checkbox.classes || '')).split(' ')
      },
      init() {
        const that = this

        that.listenTo(that, 'change:label_attr', that.generateHtml)
        that.listenTo(that, 'change:name_attr', that.generateHtml)
      }
    }),
    view: myDefaultView
  })

  dc.addType('comp_hidden', {
    model: myDefaultModel.extend({
      defaults: {
        ...myDefaultModel.prototype.defaults,
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
        classes: ('comp_hidden ' + (opts.comps.comp_hidden.classes || '')).split(' ')
      },
      init() {
        const that = this

        that.listenTo(that, 'change:name_attr', that.generateHtml)
      }
    }),
    view: myDefaultView
  })

  dc.addType('comp_submit', {
    model: myDefaultModel.extend({
      defaults: {
        ...myDefaultModel.prototype.defaults,
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
        classes: ('comp_submit ' + (opts.comps.comp_submit.classes || '')).split(' ')
      },
      init() {
        const that = this

        that.listenTo(that, 'change:label_attr', that.generateHtml)
      }
    }),
    view: myDefaultView
  })

  dc.addType('comp_row', {
    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,
        tagName: 'comp_row',
        // Can be dropped inside other elements
        draggable: true,
        copyable: false,
        // Can drop other elements inside it
        droppable: 'comp_col',
        classes: ('comp_row ' + (opts.comps.comp_row.classes || '')).split(' ')
      }
    }),
    view: defaultView
  })

  dc.addType('comp_col', {
    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,
        tagName: 'comp_col',
        // Can be dropped only inside `row` elements
        draggable: 'comp_row',
        // Can drop other elements inside it
        droppable: true,
        copyable: false,
        classes: ('comp_col ' + (opts.comps.comp_col.classes || '')).split(' ')
      }
    }),
    view: defaultView
  })

    // override default view to generate html
  const myTextView = textType.view.extend({
    getChildrenSelector() {
      let container = $(this.el).find('.note-editor')
      if (container.length <= 0) {
        $(this.el).html('<div class="note-editor" contenteditable="true"></div>')
      }

      return '.note-editor'
    }
  })

  dc.addType('comp_text', {
    model: textType.model,
    view: myTextView
  })
}
