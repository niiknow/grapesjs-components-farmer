import pluginFarmer from '../src'
import grapesjs from 'grapesjs'
import customBlocks from './custom-blocks.js'

export default (opts = {}) => {
  const config = {
    container: '#gjs',
    height: '100%',
    noticeOnUnload: 0,
    showOffsets: 1,
    autorender: 1,
    allowScripts:1,
    storageManager: {
      id: 'gjs-',             // Prefix identifier that will be used on parameters
      type: 'local',          // Type of the storage
      autosave: true,         // Store data automatically
      autoload: true,         // Autoload stored data on init
      stepsBeforeSave: 1,     // If autosave enabled, indicates how many changes are necessary before store method is triggered
    },
    forceClass: 0,
    avoidInlineStyle: 1,
    styleManager: { clearProperties: 1 },
    fromElement: 1,
    canvas: opts.canvas,
    plugins: [
      'grapesjs-components-farmer'
    ],
    pluginsOpts: {
      'grapesjs-components-farmer': {
        formNextId: 1,
        panel: 1,
        comps: opts.comps
      }
    }
  }

  let editor     = grapesjs.init(config)
  customBlocks(editor, { categoryLabel: 'Templates' })

  let pfx        = editor.getConfig().stylePrefix
  let modal      = editor.Modal
  let cmdm       = editor.Commands
  let codeViewer = editor.CodeManager.getViewer('CodeMirror').clone()
  let pnm        = editor.Panels
  let container  = document.createElement('div')

  // issue with storage autoload working with custom component
  // so we have to manually force UI to refresh
  editor.on('storage:end:load', obj => {
    setTimeout(() => {
      editor.runCommand('get-usable-html')
    }, 200)
  });

  codeViewer.set({
    codeName: 'htmlmixed',
    readOnly: 0,
    theme: 'hopscotch',
    autoBeautify: true,
    autoCloseTags: true,
    autoCloseBrackets: true,
    lineWrapping: true,
    styleActiveLine: true,
    smartIndent: true,
    indentWithTabs: true
  })

  cmdm.add('html-export-usable', {
    run: function(editor, sender) {
      sender && sender.set('active', 0)
      let viewer = codeViewer.editor
      modal.setTitle('Usable HTML')
      if (!viewer) {
        const txtarea = document.createElement('textarea')
        container.appendChild(txtarea)
        codeViewer.init(txtarea)
        viewer = codeViewer.editor
      }
      modal.setContent('')
      modal.setContent(container)
      codeViewer.setContent(editor.runCommand('get-usable-html'))
      modal.open()
      viewer.refresh()
    }
  })

  pnm.addButton('options',
    [
      {
        id: 'export',
        className: 'fa fa-download',
        command: 'html-export-usable',
        attributes: {
          title: 'Export usable HTML'
        }
      }
    ]
  )
}
