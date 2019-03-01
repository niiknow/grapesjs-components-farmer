import {
  cmdDeviceDesktop,
  cmdDeviceTablet,
  cmdDeviceMobile,
  cmdClear
} from './consts'

import $ from 'jquery'

export default (editor, config) => {
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

  const txtConfirm = config.textCleanCanvas || 'Are you sure to clean the canvas?'

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
      className: 'fa fa-square-o',
    },{
      id: prv,
      context: prv,
      command: e => e.runCommand(prv),
      className: 'fa fa-eye',
    },{
      id: ful,
      command: ful,
      context: ful,
      className: 'fa fa-arrows-alt',
    },{
      id: expt,
      className: 'fa fa-code',
      command: e => e.runCommand(expt),
    },{
      id: 'undo',
      className: 'fa fa-undo',
      command: e => e.runCommand('core:undo'),
    },{
      id: 'redo',
      className: 'fa fa-repeat',
      command: e => e.runCommand('core:redo'),
    },{
      id: cmdClear,
      className: 'fa fa-trash',
      command: e => e.runCommand(cmdClear),
    }],
  },{
    id: 'views',
    buttons  : [{
      id: osm,
      command: osm,
      active: true,
      className: 'fa fa-paint-brush',
    },{
      id: otm,
      command: otm,
      className: 'fa fa-cog',
    },{
      id: ola,
      command: ola,
      className: 'fa fa-bars',
    },{
      id: obl,
      command: obl,
      className: 'fa fa-th-large',
    }],
  }])

  // Add devices buttons
  const panelDevices = pn.addPanel({id: 'devices-c'})
  panelDevices.get('buttons').add([{
    id: cmdDeviceDesktop,
    command: cmdDeviceDesktop,
    className: 'fa fa-desktop',
    active: 1,
  },{
    id: cmdDeviceTablet,
    command: cmdDeviceTablet,
    className: 'fa fa-tablet',
  },{
    id: cmdDeviceMobile,
    command: cmdDeviceMobile,
    className: 'fa fa-mobile',
  }])

  // const openBl = pn.getButton('views', obl)
  // editor.on('load', () => openBl && openBl.set('active', 1))

  // On component change show the Style Manager
  config.showStylesOnChange && editor.on('component:selected', () => {
    const openSmBtn = pn.getButton('views', osm)
    const openLayersBtn = pn.getButton('views', ola)

    // Don't switch when the Layer Manager is on or
    // there is no selected component
    if ((!openLayersBtn || !openLayersBtn.get('active')) && editor.getSelected()) {
      openSmBtn && openSmBtn.set('active', 1)
    }
  })

  // Add and beautify tooltips
  [
    ['sw-visibility', 'Show Borders'],
    ['preview', 'Preview'],
    ['fullscreen', 'Fullscreen'],
    ['undo', 'Undo'],
    ['redo', 'Redo'],
    ['canvas-clear', 'Clear canvas']
  ].forEach((item) => {
    pn.getButton('options',
      item[0]).set('attributes',
      { title: item[1], 'data-tooltip-pos': 'bottom' }
    )
  })

  [['open-sm', 'Style Manager'], ['open-layers', 'Layers'], ['open-blocks', 'Blocks']]
  .forEach((item) => {
    pn.getButton('views',
    item[0]).set('attributes',
    { title: item[1], 'data-tooltip-pos': 'bottom' })
  })

  const titles = document.querySelectorAll('*[title]')

  for (let i = 0; i < titles.length; i++) {
    const el = titles[i]
    let title = el.getAttribute('title')
    title = title ? title.trim(): ''
    if(!title) {
      break
    }

    el.setAttribute('data-tooltip', title)
    el.setAttribute('title', '')
  }

  editor.on('load', () => {
    const pn = editor.Panels
    // Load and show settings and style manager
    const openTmBtn = pn.getButton('views', 'open-tm')
    openTmBtn && openTmBtn.set('active', 1)
    const openSm = pn.getButton('views', 'open-sm')
    openSm && openSm.set('active', 1)

    // Add Settings Sector
    const traitsSector = $('<div class="gjs-sm-sector no-select">'+
      '<div class="gjs-sm-title"><span class="icon-settings fa fa-cog"></span> Settings</div>' +
      '<div class="gjs-sm-properties" style="display: none;"></div></div>')

    const traitsProps = traitsSector.find('.gjs-sm-properties')
    const myEditor = $(editor)

    // copy from settings tab into traits sector and then hide settings tab
    traitsProps.append(myEditor.find('.gjs-trt-traits'))
    myEditor.find('.gjs-sm-sectors').before(traitsSector)
    myEditor.find('.gjs-pn-views .fa-cog').hide()

    traitsSector.find('.gjs-sm-title').on('click', () => {
      const traitStyle = traitsProps.get(0).style
      const hidden = traitStyle.display === 'none'
      if (hidden) {
        traitStyle.display = 'block'
      } else {
        traitStyle.display = 'none'
      }
    })

    // Open block manager
    const openBlocksBtn = editor.Panels.getButton('views', 'open-blocks')
    openBlocksBtn && openBlocksBtn.set('active', 1)

    pn.getButton('options', 'sw-visibility').set('active', 1)
  })

}
