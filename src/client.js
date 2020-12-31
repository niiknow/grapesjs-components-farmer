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
    this.dom   = this.win.$ || this.win.jQuery
    this.ajax  = this.dom.ajax
    this.doc   = this.win.document || {}
    this.errs  = []
    this.model = {}

    this.opts.stripe = opts.stripe || { hidePostalCode: false, style: { } }
    this.opts.stripe.style = {
      base: {
          'lineHeight': '1.49'
      }
      , ...opts.stripe.style
    }

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
      return encodeURIComponent(str)
    } catch (e) {
      return str
    }
  }

  validateAll(that, form) {
    return true
  }

  validatePhone(that, form) {
    return true
  }

  validateEmployment(that, form) {
    return true
  }

  /**
   * Numeric Input event handler
   *
   * @param  {Event}  evt the event
   * @return {Boolean}     false if not number
   */
  preventNonNumericInput(evt) {
    evt = evt || this.win.event
    var charCode = (evt.which) ? evt.which : evt.keyCode

    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      if (charCode === 42) return true
      evt.preventDefault()
      return false
    } else {
      return true
    }
  }

  stripeResponseHandler(response) {
    if (response.error) {
      this.isSubmitting       = false
      this.errs.stripe_server = response.error.message
      return false
    }

    const source  = response.source
    const payload = {}

    if (response.source) {
      payload.card_brand = source.card.brand
      payload.card_last4 = source.card.last4
      payload.card_month = source.card.month
      payload.card_year  = source.card.year
      payload.pay_token  = source.id
      payload.pay_source = JSON.stringify(source)
    }

    this.errs.server = null

    return payload
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

  doAlways(form) {
    const that    = this
    const dom     = that.dom
    const $inputs = dom('input[type="file"]', form[0])

    setTimeout(() => {
      // see safariQuirks
      $inputs.prop('disabled', false)
      that.isSubmitting = false
    }, 200)
  }

  doFormSubmit(form, fd) {
    const that = this

    that.ajax({
      mode: 'cors',
      cache: false,
      contentType: false,
      processData: false,
      method: 'POST',
      type: 'POST', // For jQuery < 1.9
      url: form.attr('action'),
      data: fd
    }).done((data, textStatus, jqXHR) => {
      if (that.onDone) {
        that.onDone(data, textStatus, jqXHR)
      }
    }).fail((jqXHR, textStatus, errorThrown) => {
      if (that.onFail) {
        that.onDone(jqXHR, textStatus, errorThrown)
      }
    }).always(() => {
      that.doAlways(form)
    })
  }

  initStripe(form) {
    const that   = this
    const opts   = that.opts
    const win    = that.win
    const dom    = that.dom
    const stripe = win.Stripe
    const elSel  = opts.stripeSelector || '#stripeElement'

    if (typeof(stripe) === 'function') {
      const stripeEl = dom(elSel)
      const key      = (stripeEl.data('key') || '').trim()
      const hidePostal = stripeEl.data('hide-postal')

      if (key.length > 2) {
        that.stripe   = stripe(key)
        that.elements = that.stripe.elements()

        // Create an instance of the card Element
        that.card = that.elements.create('card', {
          style: opts.stripe.style,
          hidePostalCode: hidePostal
        })

        // Add an instance of the card Element into div
        that.card.mount(elSel)

        // Handle real-time validation errors from the card Element.
        that.card.addEventListener('change', (e) => {
          that.errs.stripe_client = null
          that.errs.stripe_server = null
          if (e.error) {
            that.errs.stripe_client = e.error.message
          }
        })
      }
    }
  }

  /**
   * https://stackoverflow.com/questions/51201011/ios-safari-fails-to-send-form-data-via-ajax/51273135
   *
   */
  safariQuirks(form) {
    const that    = this
    const dom     = that.dom
    const $inputs = dom('input[type="file"]:not([disabled])', form[0])
    if ($inputs.length > 0) {
      $inputs.each((_, input) => {
        if (input.files.length > 0) return
        dom(input).prop('disabled', true)
      })
    }
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
    // status: "success", "notmodified", "nocontent", "error", "timeout", "abort", or "parsererror"
    const doAjaxPost = (form) => {
      // serialize form
      that.safariQuirks(form)
      const fd = new FormData(form[0])

      // if no payment then simply submit
      if (!that.card) {
        return that.doFormSubmit(form, fd)
      }

      // otherwise, process stripe charge
      const model = {}

      // we use form serializeArray to provide better browser support
      // as FormData is not compatible with many browsers
      const fa    = form.serializeArray()

      // convert to object
      fa.forEach((value, key) => {
        model[key] = value
      })

      // compose payload for stripe
      const ownerInfo = {
        owner: {
          name: model.name,
          email: model.email
        }
      }

      // if address exist, pass it along
      if (model.address1) {
        ownerInfo.owner.address =  {
          line1: model.address1,
          line2: model.address2,
          city: model.city,
          state: model.state,
          postal_code: model.postal,
          country: model.country
        }
      }

      // if first name exists, there must be a last name
      if (model.first_name) {
        ownerInfo.name = model.first_name + ' ' + model.last_name
      }

      // send to stripe
      that.stripe.createSource(that.card, ownerInfo)
        .then((rsp) => {
          let rst = that.stripeResponseHandler(rsp)
          if (rst) {
            // append result to form data
            for(let k in rst) {
              fd.append(k, rst[k])
            }

            that.doFormSubmit(form, fd)
          } else {
            that.doAlways(form)
          }
        })
    }

    // get the first form
    let form = dom(document.forms[0])

    // if id is provided, get by id
    if (formId) {
      form = dom('#' + formId)
    }

    // handle form submit
    form.on('submit', (e) => {
      // prevent double submits
      e.preventDefault()
      if (that.isSubmitting) {
        return false
      }

      that.validateAll(that, form)
      that.validatePhone(that, form)
      that.validateEmployment(that, form)

      const errs  = that.errs
      let isValid = that.errs.length <= 0

      isValid = isValid && !errs.phone && !errs.amount && !errs.stripe_client && !errs.stripe_server
      isValid = isValid && !errs.employer && !errs.occupation

      if (isValid) {
        that.isSubmitting = true

        // find captcha input
        const input = form.find('input[name="g-recaptcha-response"]')

        /* do something to prevent double submit, like disable submit button */
        if (win.grecaptcha && input.length > 0) {
          win.grecaptcha.ready(() => {
            win.grecaptcha.execute(input.data('sitekey'), { action: (input.data('action') || form.attr('id')) })
            .then((token) => {
              input.val(token)
              doAjaxPost(form)
            })
          })
        } else {
          doAjaxPost(form)
        }
      }

      return false
    })

    // init strype
    if (win.Stripe) {
      that.initStripe(form)
    }
  }
}

export default GcfClient
