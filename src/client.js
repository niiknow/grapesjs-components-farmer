/**
 * Client-side script for form submission
 */
class GcfClient {
  constructor(opts = {}, win = window) {
    this._name = 'GcfClient'
    this.win   = win
    this.opts  = opts
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
    const jQuery = win.jQuery
    const iQuery = win.location.href.indexOf('?')
    if (iQuery > 0) {
      var vars = that.queryParseString(win.location.href.slice(iQuery + 1))
      for(var k in vars) {
        if (vars[k]) {
          jQuery('[name="'+k+'"]').val(vars[k])
        }
      }
    }

    var formId = opts.formId;
    var doAjaxPost = function(form) {
      jQuery.ajax({
        type: 'POST',
        mode: 'cors',
        url: form.attr('action'),
        data: form.serialize(),
        success: function (data)
        {
          alert(JSON.stringify(data))
        }
      })
    }

    const form = jQuery('#' + formId)
    form.on('submit', (e) => {
      e.preventDefault()
      const input = jQuery('#g-recaptcha-response')

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
