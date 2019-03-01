import pluginFarmer from '../src'
import grapesjs from 'grapesjs'
import $ from 'jquery'

// only for debugging purpose as pluginFarmer is reference from source
// when you import directly as 'grapesjs-components-farmer' then you don't need to do this
window['grapesjs-components-farmer'] = pluginFarmer

const opts = {
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
  canvas: {
    styles: [
      'example/bootstrap4.css'
    ],
    scripts: [
      'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'
    ]
  },
  script: () => {
    // initialize next id
    window.nextNameIndex = 1
  },
  plugins: [
    'grapesjs-components-farmer'
  ],
  pluginsOpts: {
    'grapesjs-components-farmer': {
      formNextId: 1,
      panel: 1
    }
  }
}

window.editor = grapesjs.init(opts)
