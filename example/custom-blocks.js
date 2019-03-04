export default (editor, opts = {}) => {
  const bm     = editor.BlockManager

  bm.add('contact', {
    label: `<svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path class="gjs-block-svg-path" d="M22,5.5 C22,5.2 21.5,5 20.75,5 L3.25,5 C2.5,5 2,5.2 2,5.5 L2,8.5 C2,8.8 2.5,9 3.25,9 L20.75,9 C21.5,9 22,8.8 22,8.5 L22,5.5 Z M21,8 L3,8 L3,6 L21,6 L21,8 Z" fill-rule="nonzero"></path>
        <path class="gjs-block-svg-path" d="M22,10.5 C22,10.2 21.5,10 20.75,10 L3.25,10 C2.5,10 2,10.2 2,10.5 L2,13.5 C2,13.8 2.5,14 3.25,14 L20.75,14 C21.5,14 22,13.8 22,13.5 L22,10.5 Z M21,13 L3,13 L3,11 L21,11 L21,13 Z" fill-rule="nonzero"></path>
        <rect class="gjs-block-svg-path" x="2" y="15" width="10" height="3" rx="0.5"></rect>
      </svg>
      <div class="gjs-block-label">Contact</div></div>`,
    category: opts.cateogyrLabel || 'Templates',
    content: {
      components: [
        { type: 'comp_input', label_attr: 'Name', name_attr: 'name', placeholder_attr: 'Name' },
        { type: 'comp_input', label_attr: 'Email', name_attr: 'email', placeholder_attr: 'Email', type_attr: 'email' },
        { type: 'comp_textarea', name_attr: 'message', placeholder_attr: 'Message', label_attr: 'Message' },
        { type: 'comp_submit' }
      ]
    }
  })

  bm.add('address', {
    label: `<svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path class="gjs-block-svg-path" d="M22,5.5 C22,5.2 21.5,5 20.75,5 L3.25,5 C2.5,5 2,5.2 2,5.5 L2,8.5 C2,8.8 2.5,9 3.25,9 L20.75,9 C21.5,9 22,8.8 22,8.5 L22,5.5 Z M21,8 L3,8 L3,6 L21,6 L21,8 Z" fill-rule="nonzero"></path>
        <path class="gjs-block-svg-path" d="M22,10.5 C22,10.2 21.5,10 20.75,10 L3.25,10 C2.5,10 2,10.2 2,10.5 L2,13.5 C2,13.8 2.5,14 3.25,14 L20.75,14 C21.5,14 22,13.8 22,13.5 L22,10.5 Z M21,13 L3,13 L3,11 L21,11 L21,13 Z" fill-rule="nonzero"></path>
        <rect class="gjs-block-svg-path" x="2" y="15" width="10" height="3" rx="0.5"></rect>
      </svg>
      <div class="gjs-block-label">Address</div></div>`,
    category: opts.cateogyrLabel || 'Templates',
    content: {
      components: [
        {
          type: 'comp_row',
          components: [
            {
              type: 'comp_col',
              components: [
                 { type: 'comp_input', type_attr: 'email', label_attr: 'Email', name_attr: 'email', placeholder_attr: 'Email' }
              ]
            }
          ]
        },
        {
          type: 'comp_row',
          components: [
            {
              type: 'comp_col',
              components: [
                 { type: 'comp_input', label_attr: 'First Name', name_attr: 'fname', placeholder_attr: 'First Name' }
              ]
            },
            {
              type: 'comp_col',
              components: [
                 { type: 'comp_input', label_attr: 'Last Name', name_attr: 'lname', placeholder_attr: 'Last Name' }
              ]
            }

          ]
        },
        {
          type: 'comp_row',
          components: [
            {
              type: 'comp_col',
              components: [
                 { type: 'comp_input', label_attr: 'Address Line 1', name_attr: 'address1', placeholder_attr: 'Address Line 1' }
              ]
            }
          ]
        },
        {
          type: 'comp_row',
          components: [
            {
              type: 'comp_col',
              components: [
                 { type: 'comp_input', label_attr: 'Address Line 2', name_attr: 'address2', placeholder_attr: 'Address Line 2' }
              ]
            }
          ]
        },
        {
          type: 'comp_row',
          components: [
            {
              type: 'comp_col',
              components: [
                 { type: 'comp_input', label_attr: 'City', name_attr: 'city', placeholder_attr: 'City' }
              ]
            },
            {
              type: 'comp_col',
              components: [
                 { type: 'comp_input', label_attr: 'State', name_attr: 'state', placeholder_attr: 'State' }
              ]
            },
            {
              type: 'comp_col',
              components: [
                 { type: 'comp_input', label_attr: 'Zip', name_attr: 'zip', placeholder_attr: 'Zip' }
              ]
            }
          ]
        }
      ]
    }
  })
}
