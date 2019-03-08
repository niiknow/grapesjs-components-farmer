/**
 * Client-side script for form submission
 *
 * requires: jQuery - todo remove later
 */
const myRoot = (typeof self === 'object' && self.self === self && self) ||
  (typeof global === 'object' && global.global === global && global) ||
  this

class GcfClient {
  constructor(opts = {}) {
    this._name = 'GcfClient'
    this.win   = opts.win || myRoot
    this.opts  = opts
    this.dom   = this.win.jQuery
    this.ajax  = this.dom.ajax
    this.doc   = this.win.document || {}
    this.init()
  }

  /**
   * safely decode the string
   * @param  {string} str
   * @return {string} url decoded string
   */
  decode(str) {
    try {
      return decodeURIComponent(str.replace(/\+/g, ' '))
    } catch (e) {
      return str
    }
  }

  /**
   * safely encode the string
   * @param  {string} str
   * @return {string} url encoded string
   */
  encode(str) {
    try {
      return encodeURIComponent(str);
    } catch (e) {
      return str;
    }
  }

  /**
   * helper method to parse querystring to object
   * @param  {string} qstr the querystring
   * @return {object}      result
   */
  queryParseString(qstr) {
    qstr  = (qstr || '').replace('?', '').replace('#', '')

    const pattern = /(\w+)\[(\d+)\]/
    const decode  = this.decode,
          obj     = {},
          a       = qstr.split('&')

    a.forEach((v) => {
      const parts = v.split('=')
      const key   = decode(parts[0])
      const m     = pattern.exec(key)

      if (m) {
        obj[m[1]]       = obj[m[1]] || []
        obj[m[1]][m[2]] = decode(parts[1])
        return
      }

      obj[parts[0]] = decode(parts[1] || '')
    })

    return obj || {}
  }

  init() {
    const that   = this
    const opts   = that.opts
    const win    = that.win
    const dom    = that.dom
    const formId = opts.formId
    const iQuery = win.location.href.indexOf('?')

    // auto populate query string to form field
    if (iQuery > 0) {
      const vars = that.queryParseString(win.location.href.slice(iQuery + 1))

      for(let k in vars) {
        if (vars[k]) {
          dom(`[name="${k}"]`).val(vars[k])
        }
      }
    }

    // handle form submission with ajax
    const doAjaxPost = (form) => {
      that.ajax({
        type: 'POST',
        mode: 'cors',
        url: form.attr('action'),
        data: form.serialize(),
        success: (data) => {
          alert(JSON.stringify(data, 2))
          setTimeout(() => {
            that.isSubmitting = false
          }, 200)
        },
        error: (data) => {
          alert(JSON.stringify(data.responseJSON, 2))
          setTimeout(() => {
            that.isSubmitting = false
          }, 200)
        }
      })
    }

    // get the first form
    let form = dom(document.getElementsByClassName('form')[0])
    if (formId) {
      form = dom('#' + formId)
    }

    form.on('submit', (e) => {
      // prevent double submitts
      e.preventDefault()
      if (that.isSubmitting) {
        return false
      }
      that.isSubmitting = true

      // find captcha input
      const input = form.find('input[name="g-recaptcha-response"]')

      /* do something to prevent double submit, like disable submit button */
      if (win.grecaptcha && input.length > 0) {
        win.grecaptcha.ready(function() {
          win.grecaptcha.execute(input.data('sitekey'), { action: (input.data('action') || form.attr('id')) })
          .then(function(token) {
            input.val(token)
            doAjaxPost(form)
          })
        });
      } else {
        doAjaxPost(form)
      }

      return false
    })
  }
}

export default GcfClient
