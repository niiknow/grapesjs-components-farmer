const config = {
  canvas: {
    styles: [
     'https://cdn.jsdelivr.net/npm/foundation-sites@6.7.5/dist/css/foundation.min.css'
    ],
    scripts: []
  },
  comps: {
    'comp_input': {
      label: 'Input',
      classes: 'cell large-12',
      useTag: 'div',
      template: `
        <label for="<%=it.name_attr%>"><%=it.label_attr%>
          <input <%= it.required_attr ? 'required ' : '' %>type="<%=it.type_attr%>" id="<%=it.name_attr%>" name="<%=it.name_attr%>" placeholder="<%=it.placeholder_attr || ''%>" <%= it.value_attr ? 'value="' + it.value_attr + '"' : '' %>/>
        </label>
      `
    },
    'comp_select': {
      label: 'Select',
      classes: 'cell large-12',
      useTag: 'div',
      template: `
        <label for="<%=it.name_attr%>"><%=it.label_attr%>
          <select <%= it.multiple_attr ? 'multiple ' : '' %><%= it.required_attr ? 'required ' : '' %>id="<%=it.name_attr%>" name="<%=it.name_attr%>">
            <option selected>-- Please select an option -- </option>
            <% (it.option_attr + "").trim().split("\\n").forEach(function(option){ %>
            <% var msgProps = option.split('::');
            %> <option value="<%= msgProps[0]%>"><%= msgProps[1] || msgProps[0] %></option>
            <% }); %>
          </select>
        </label>
      `
    },
    'comp_textarea': {
      label: 'Textarea',
      classes: 'cell large-12',
      useTag: 'div',
      template: `
        <label for="<%=it.name_attr%>"><%=it.label_attr%>
          <textarea <%= it.required_attr ? 'required ' : '' %><%= it.rows_attr ? 'rows="' + it.rows_attr + '" ' : '' %><%= it.rows_attr ? 'cols="' + it.rows_attr + '" ' : '' %>id="<%=it.name_attr%>" name="<%=it.name_attr%>" placeholder="<%=it.placeholder_attr || ''%>"><%= it.value_attr || '' %></textarea>
        </label>
      `
    },
    'comp_checkbox': {
      label: 'Checkbox',
      classes: 'cell large-12',
      useTag: 'div',
      template: `
        <label for="<%=it.name_attr%>">
          <input <%= it.required_attr ? 'required ' : '' %>type="checkbox"id="<%=it.name_attr%>"  name="<%=it.name_attr%>" <%= it.value_attr ? 'value="' + it.value_attr + '"' : '' %>/>
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
      classes: 'button expanded',
      useTag: 'button',
      template: '<%= it.label_attr %>'
    },
    'comp_row': {
      label: 'Row',
      useTag: 'div',
      classes: 'grid-x'
    },
    'comp_col': {
      label: 'Column',
      useTag: 'div',
      classes: 'cell'
    },
    'comp_col1': {
      label: '1 Column',
      useTag: 'div',
      classes: 'large-12'
    },
    'comp_col2': {
      label: '2 Columns',
      useTag: 'div',
      classes: 'large-6'
    },
    'comp_col3': {
      label: '3 Columns',
      useTag: 'div',
      classes: 'large-4'
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
