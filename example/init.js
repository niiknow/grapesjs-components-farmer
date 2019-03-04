import pluginFarmer from '../src'
import grapesjs from 'grapesjs'
import $ from 'jquery'
import customBlocks from './custom-blocks.js'

// only for debugging purpose as pluginFarmer is reference from source
// when you import directly as 'grapesjs-components-farmer' then you don't need to do this
window['grapesjs-components-farmer'] = pluginFarmer

export default (opts = {}) => {
  const config = {
    container: '#gjs',
    height: '100%',
    noticeOnUnload: 0,
    showOffsets: 1,
    autorender: 1,
    allowScripts:1,
    storageManager: {type: 'none'},
    forceClass: 0,
    avoidInlineStyle: 1,
    styleManager: { clearProperties: 1 },
    fromElement: 1,
    canvas: opts.canvas,
    plugins: [
      'grapesjs-components-farmer',
      'gjs-plugin-ckeditor'
    ],
    pluginsOpts: {
      'grapesjs-components-farmer': {
        formNextId: 1,
        panel: 1,
        comps: opts.comps
      },
      'gjs-plugin-ckeditor': {
        position: 'center',
        options: {
          startupFocus: true,
          // Allows any class and any inline style
          extraAllowedContent: '*(*);*{*}',
          // Disable auto-formatting, class removing, etc.
          allowedContent: true,
          enterMode: CKEDITOR.ENTER_BR,
          extraPlugins: 'sharedspace,justify,colorbutton,panelbutton,font',
          toolbar: [
            { name: 'styles', items: ['Font', 'FontSize' ] },
            ['Bold', 'Italic', 'Underline', 'Strike'],
            { name: 'paragraph', items : [ 'NumberedList', 'BulletedList'] },
            { name: 'links', items: ['Link', 'Unlink'] },
            { name: 'colors', items: [ 'TextColor', 'BGColor' ] }
          ]
        }
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
