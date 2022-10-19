const config = {
  canvas: {
    styles: [
      'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css'
    ],
    scripts: [
      'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'
    ]
  },
  comps: {
    'comp_input': {
      label: 'Input',
      classes: 'input-field col s12',
      useTag: 'div',
      template: `
        <input <%= it.required_attr ? 'required ' : '' %>type="<%=it.type_attr%>" id="<%=it.name_attr%>" name="<%=it.name_attr%>" placeholder="<%=it.placeholder_attr || ''%>" <%= it.value_attr ? 'value="' + it.value_attr + '"' : '' %>/>
        <label for="<%=it.name_attr%>"><%=it.label_attr%></label>
      `
    },
    'comp_select': {
      label: 'Select',
      classes: 'input-field col s12',
      useTag: 'div',
      template: `
        <select <%= it.multiple_attr ? 'multiple ' : '' %><%= it.required_attr ? 'required ' : '' %>id="<%=it.name_attr%>" name="<%=it.name_attr%>">
          <option selected>-- Please select an option -- </option>
          <% (it.option_attr + "").trim().split("\\n").forEach(function(option){ %>
          <% var msgProps = option.split('::');
          %> <option value="<%= msgProps[0]%>"><%= msgProps[1] || msgProps[0] %></option>
          <% }); %>
        </select>
        <label for="<%=it.name_attr%>"><%=it.label_attr%></label>
      `
    },
    'comp_textarea': {
      label: 'Textarea',
      classes: 'input-field col s12',
      useTag: 'div',
      template: `
        <textarea <%= it.required_attr ? 'required ' : '' %><%= it.rows_attr ? 'rows="' + it.rows_attr + '" ' : '' %><%= it.rows_attr ? 'cols="' + it.rows_attr + '" ' : '' %>id="<%=it.name_attr%>" name="<%=it.name_attr%>" placeholder="<%=it.placeholder_attr || ''%>"><%= it.value_attr || '' %></textarea>
        <label for="<%=it.name_attr%>"><%=it.label_attr%></label>
      `
    },
    'comp_checkbox': {
      label: 'Checkbox',
      classes: 'row',
      useTag: 'div',
      template: `
        <div class="input-field col s12">
          <label for="<%=it.name_attr%>">
            <input <%= it.required_attr ? 'required ' : '' %>type="checkbox" id="<%=it.name_attr%>" name="<%=it.name_attr%>" <%= it.value_attr ? 'value="' + it.value_attr + '"' : '' %>/>
            <span><%=it.label_attr%></span>
          </label>
        </div>
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
      classes: 'col s12',
      useTag: 'div',
      template: '<button class="btn waves-effect waves-light" style="width: 100%" type="submit" name="action"><%= it.label_attr %></button>'
    },
    'comp_row': {
      label: 'Row',
      useTag: 'div',
      classes: 'row'
    },
    'comp_col': {
      label: 'Column',
      useTag: 'div'
    },
    'comp_col1': {
      label: '1 Column',
      useTag: 'div',
      classes: 'col s12'
    },
    'comp_col2': {
      label: '2 Columns',
      useTag: 'div',
      classes: 'col s6'
    },
    'comp_col3': {
      label: '3 Columns',
      useTag: 'div',
      classes: 'col s4'
    },
    'comp_text': {
      label: 'Text'
    },
    'comp_image': {
      label: 'Image'
    },
    'comp_map': {
      label: 'Map'
    }
  }
}

export default config
