import init from './init'
import bootstrap5 from './bootstrap5'
import foundation from './foundation'
import googlemd   from './googlemd'

if (window.location.href.indexOf('css=foundation') > 0) {
  console.log('Foundation CSS')
  init(foundation)
} else if (window.location.href.indexOf('css=materialize') > 0) {
  console.log('Google Materialize CSS')
  init(googlemd)
} else {
  console.log('Bootstrap 5 CSS')
  init(bootstrap5)
}
