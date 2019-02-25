export default (editor, opts = {}) => {
  const opt = {

    categoryLabel: '',

    // Column padding (this way it's easier select columns)
    columnsPadding: '10px 0',

    ...opts,
  };

  let config = editor.getConfig();

  // I need to prevent forced class creation as classes aren't working
  // at the moment
  config.forceClass = 0;

  // Don't need to create css rules with media
  config.devicePreviewMode = 1;

  // Add Blocks
  require('./blocks').default(editor, opt);

  // Add Components
  require('./components').default(editor, opt);

  // Add Buttons
  require('./buttons').default(editor, opt);
};
