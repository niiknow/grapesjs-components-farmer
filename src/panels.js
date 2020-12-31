import {
  cmdDeviceDesktop,
  cmdDeviceTablet,
  cmdDeviceMobile,
  cmdClear
} from './consts'

import cashdom from 'cash-dom'

export default (editor, opts) => {
  const cmds    = editor.Commands
  const pn      = editor.Panels
  const eConfig = editor.getConfig()
  const crc     = 'create-comp'
  const mvc     = 'move-comp'
  const swv     = 'sw-visibility'
  const expt    = 'export-template'
  const osm     = 'open-sm'
  const otm     = 'open-tm'
  const ola     = 'open-layers'
  const obl     = 'open-blocks'
  const ful     = 'fullscreen'
  const prv     = 'preview'

  eConfig.showDevices = 0

  const txtConfirm = opts.textCleanCanvas || 'Are you sure to clean the canvas?'

  cmds.add(cmdDeviceDesktop, e => e.setDevice('Desktop'))
  cmds.add(cmdDeviceTablet, e => e.setDevice('Tablet'))
  cmds.add(cmdDeviceMobile, e => e.setDevice('Mobile portrait'))
  cmds.add(cmdClear, e => confirm(txtConfirm) && e.runCommand('core:canvas-clear'))

  pn.getPanels().reset([{
    id: 'commands',
    buttons: [{}],
  },{
    id: 'options',
    buttons: [{
      id: swv,
      command: swv,
      context: swv,
      active: 1,
      className: 'fa fa-square-o',
      attributes: {
        title: 'Show Borders'
      }
    },{
      id: prv,
      context: prv,
      command: e => e.runCommand(prv),
      className: 'fa fa-eye',
      attributes: {
        title: 'Preview'
      }
    },{
      id: ful,
      command: ful,
      context: ful,
      className: 'fa fa-arrows-alt',
      attributes: {
        title: 'Fullscreen'
      }
    },{
      id: expt,
      className: 'fa fa-code',
      command: e => e.runCommand(expt),
      attributes: {
        title: 'Show code'
      }
    },{
      id: 'undo',
      className: 'fa fa-undo',
      command: e => e.runCommand('core:undo'),
      attributes: {
        title: 'Undo'
      }
    },{
      id: 'redo',
      className: 'fa fa-repeat',
      command: e => e.runCommand('core:redo'),
      attributes: {
        title: 'Redo'
      }
    },{
      id: cmdClear,
      className: 'fa fa-trash',
      command: e => e.runCommand(cmdClear),
      attributes: {
        title: 'Clear canvas'
      }
    }],
  },{
    id: 'views',
    buttons  : [{
      id: osm,
      command: osm,
      className: 'fa fa-paint-brush',
      attributes: {
        title: 'Style Manager'
      }
    },{
      id: otm,
      command: otm,
      className: 'fa fa-cog',
      attributes: {
        title: 'Settings'
      }
    },{
      id: ola,
      command: ola,
      className: 'fa fa-bars',
      attributes: {
        title: 'Layers'
      }
    },{
      id: obl,
      command: obl,
      className: 'fa fa-th-large',
      active: 1,
      attributes: {
        title: 'Blocks'
      }
    }],
  }])

  // Add devices buttons
  const panelDevices = pn.addPanel({id: 'devices-c'})
  panelDevices.get('buttons').add([{
    id: cmdDeviceDesktop,
    command: cmdDeviceDesktop,
    className: 'fa fa-desktop',
    active: 1,
    attributes: {
      title: 'Desktop'
    }
  },{
    id: cmdDeviceTablet,
    command: cmdDeviceTablet,
    className: 'fa fa-tablet',
    attributes: {
      title: 'Tablet'
    }
  },{
    id: cmdDeviceMobile,
    command: cmdDeviceMobile,
    className: 'fa fa-mobile',
    attributes: {
      title: 'Mobile'
    }
  }])


  editor.on('load', () => {
    const pn       = editor.Panels
    const editorEl = cashdom(editor.getEl())

    // Load and show settings and style manager
    const openTmBtn = pn.getButton('views', 'open-tm')
    openTmBtn && openTmBtn.set('active', 1)
    const openSm = pn.getButton('views', 'open-sm')
    openSm && openSm.set('active', 1)

    // Add Settings Sector
    const traitsSector = cashdom(`<div class="gjs-sm-sector no-select">
<div class="gjs-sm-title"><span class="icon-settings fa fa-cog"></span> Settings</div>
<div class="gjs-sm-properties"></div></div>`)
    const traitsProps  = traitsSector.find('.gjs-sm-properties')

    // copy from settings tab into traits sector and then hide settings tab
    traitsProps.append(editorEl.find('.gjs-trt-traits'))
    editorEl.find('.gjs-pn-views .fa-cog').get(0).style.display = 'none'
    editorEl.find('.gjs-sm-sectors').before(traitsSector)

    traitsSector.find('.gjs-sm-title').on('click', () => {
      const traitStyle = traitsProps.get(0).style
      const hidden = traitStyle.display === 'none'
      if (hidden) {
        traitStyle.display = 'block'
      } else {
        traitStyle.display = 'none'
      }
    })

    const openBl = pn.getButton('views', obl)
    openBl && openBl.set('active', 1)

    // On component change show the Style Manager
    opts.showStylesOnChange && editor.on('component:selected', () => {
      const openSmBtn = pn.getButton('views', osm)
      const openLayersBtn = pn.getButton('views', ola)

      // Don't switch when the Layer Manager is on or
      // there is no selected component
      if ((!openLayersBtn || !openLayersBtn.get('active')) && editor.getSelected()) {
        openSmBtn && openSmBtn.set('active', 1)
      }
    })
  })
}
