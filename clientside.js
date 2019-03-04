// auto populate fields based on query string
const that = window

function getUrlVars()
{
  var vars = [], hash;
  var hashes = that.location.href.slice(that.location.href.indexOf('?') + 1).split('&');

  for(var i = 0; i < hashes.length; i++)
  {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }

  return vars;
}

var vars = getUrlVars();
for(var k in vars) {
  if (vars[k]) {
    jQuery('[name="'+k+'"]').val(vars[k])
  }
}

// create validation errors
that.validationErrors = that.validationErrors || {}

// initialize stripe
if (typeof(that.STRIPE_KEY) === 'string' && typeof(Stripe) === 'function') {

  that.stripe   = Stripe(that.STRIPE_KEY);
  that.elements = that.stripe.elements();

  // Create an instance of the card Element
  that.card = that.elements.create('card', {
    style: that.elStyle,
    hidePostalCode: true
  });

  // Add an instance of the card Element into the `cardElement` div
  that.card.mount('#cardElement');

  // Handle real-time validation errors from the card Element.
  that.card.addEventListener('change', (event) => {
    that.validationErrors.stripe_client = null;
    that.validationErrors.stripe_server = null;
    if (event.error) {
      $this.validationErrors.stripe_client = event.error.message;
    }
  })
}
