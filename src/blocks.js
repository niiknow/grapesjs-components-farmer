export default (editor, opts = {}) => {
  const bm     = editor.BlockManager
  const c      = opts.comps
  const blocks = c.blocks
  const cats   = c.blockCategories

  if (opts.resetBlocks) {
    bm.getAll().reset()
  }

  const allBlocks = {
    category: opts.categoryLabel
  }

  // CORE BLOCKS
  bm.add('comp_col1').set({
    label: c.comp_col1.label,
    attributes: { class: 'gjs-fonts gjs-f-b1' },
    content: {
      type: 'comp_row',
      components: [
        { type: 'comp_col', classes: c.comp_col1.classes.concat(c.comp_col.classes) }
      ]
    },
    ...allBlocks
  })

  bm.add('comp_col2').set({
    label: c.comp_col2.label,
    attributes: { class: 'gjs-fonts gjs-f-b2' },
    content: {
      type: 'comp_row',
      components: [
        { type: 'comp_col', classes: c.comp_col2.classes.concat(c.comp_col.classes) },
        { type: 'comp_col', classes: c.comp_col2.classes.concat(c.comp_col.classes) }
      ]
    },
    ...allBlocks
  })

  bm.add('comp_col3').set({
    label: c.comp_col3.label,
    attributes: { class: 'gjs-fonts gjs-f-b3' },
    content: {
      type: 'comp_row',
      components: [
        { type: 'comp_col', classes: c.comp_col3.classes.concat(c.comp_col.classes) },
        { type: 'comp_col', classes: c.comp_col3.classes.concat(c.comp_col.classes) },
        { type: 'comp_col', classes: c.comp_col3.classes.concat(c.comp_col.classes) }
      ]
    },
    ...allBlocks
  })

  bm.add('comp_submit', {
    label: `
      <div style="color: #fff;
    background-color: #007bff;
    border-color: #007bff;
    display: inline-block;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    border: 1px solid transparent;
    padding-left: 5px;
    padding-right: 5px;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    margin-top: 12px;
    margin-bottom: 16px;
    width: 50px;">&nbsp;</div>
      <div class="gjs-block-label">${c.comp_submit.label}</div>
    `,
    content: {
      type: 'comp_submit'
    },
    ...allBlocks
  })

  bm.add('comp_input', {
    label: `
    <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z"></path>
      <polygon class="gjs-block-svg-path" points="4 10 5 10 5 14 4 14"></polygon>
    </svg>
    <div class="gjs-block-label">${c.comp_input.label}</div>`,
    content: {
      type: 'comp_input'
    },
    ...allBlocks
  })

  bm.add('comp_textarea', {
    label: `
    <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path class="gjs-block-svg-path" d="M22,7.5 C22,6.6 21.5,6 20.75,6 L3.25,6 C2.5,6 2,6.6 2,7.5 L2,16.5 C2,17.4 2.5,18 3.25,18 L20.75,18 C21.5,18 22,17.4 22,16.5 L22,7.5 Z M21,17 L3,17 L3,7 L21,7 L21,17 Z"></path>
      <polygon class="gjs-block-svg-path" points="4 8 5 8 5 12 4 12"></polygon>
      <polygon class="gjs-block-svg-path" points="19 7 20 7 20 17 19 17"></polygon>
      <polygon class="gjs-block-svg-path" points="20 8 21 8 21 9 20 9"></polygon>
      <polygon class="gjs-block-svg-path" points="20 15 21 15 21 16 20 16"></polygon>
    </svg>
    <div class="gjs-block-label">${c.comp_textarea.label}</div>`,
    content: {
      type: 'comp_textarea'
    },
    ...allBlocks
  })

  bm.add('comp_select', {
    label: `
    <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z" fill-rule="nonzero"></path>
      <polygon class="gjs-block-svg-path" transform="translate(18.500000, 12.000000) scale(1, -1) translate(-18.500000, -12.000000) " points="18.5 11 20 13 17 13"></polygon>
      <rect class="gjs-block-svg-path" x="4" y="11.5" width="11" height="1"></rect>
    </svg>
    <div class="gjs-block-label">${c.comp_select.label}</div>`,
    content: {
      type: 'comp_select'
    },
    ...allBlocks
  })

  bm.add('comp_file', {
    label: c.comp_file.label,
    attributes: { class:'fa fa-file' },
    content: {
      type: 'comp_file'
    },
    ...allBlocks
  })

  bm.add('comp_checkbox', {
    label: c.comp_checkbox.label,
    attributes: { class: 'fa fa-check-square' },
    content: {
      type: 'comp_checkbox'
    },
    ...allBlocks
  })

  bm.add('comp_hidden', {
    label: `<svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z"></path>
      <polygon class="gjs-block-svg-path" points="4 10 5 10 5 14 4 14"></polygon>
    </svg>
    <div class="gjs-block-label">${c.comp_hidden.label}</div>`,
    content: {
      type: 'comp_hidden'
    },
    ...allBlocks
  })

  bm.add('comp_text', {
    label: c.comp_text.label,
    attributes: { class:'gjs-fonts gjs-f-text' },
    content: {
      type:'text',
      content: 'Insert your text here',
      style: {padding: '10px' },
      activeOnRender: 1
    },
    ...allBlocks
  })

  bm.add('comp_image', {
    label: c.comp_image.label,
    attributes: { class:'gjs-fonts gjs-f-image' },
    content: {
      style: {color: 'black'},
      type:'image',
      activeOnRender: 1
    },
    ...allBlocks
  })

  bm.add('comp_map', {
    label: c.comp_map.label,
    attributes: { class:'fa fa-map-o' },
    content: {
      type: 'map',
      style: { height: '350px' }
    },
    ...allBlocks
  })

  bm.add('comp_recaptcha', {
    label: `
      <image src="https://www.gstatic.com/recaptcha/api2/logo_48.png">
      <br /><br />
    <div class="gjs-block-label">${c.comp_recaptcha.label}</div>`,
    content: {
      type: 'comp_recaptcha'
    },
    ...allBlocks
  })

  bm.add('comp_stripe', {
    label: c.comp_stripe.label,
    attributes: { class:'fa fa-cc-stripe' },
    content: {
      type: 'comp_stripe'
    },
    ...allBlocks
  })

}
