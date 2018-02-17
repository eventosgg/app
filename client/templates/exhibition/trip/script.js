Template.trip.onCreated(function() {
  Session.set('purchaseErrors', {});
});

Template.trip.helpers({
  errorMessage: function(field) {
    return Session.get('purchaseErrors')[field];
  },
  errorClass: function (field) {
    return !!Session.get('purchaseErrors')[field] ? 'has-error' : '';
  },
  errorExists: function (field) {
    return !!Session.get('purchaseErrors')[field] ? true : false;
  }
});

Template.trip.events({
  'submit form': function(e) {
    e.preventDefault();

    Session.set('purchaseErrors', {});

    var user = {
      firstName: $(e.target).find('[name=firstName]').val(),
      lastName: $(e.target).find('[name=lastName]').val(),
      email: $(e.target).find('[name=email]').val(),
      terms: $(e.target).find('[name=terms]').is(':checked')
    };

    var errors = validatepurchase(user);

    if(_.size(errors)>0){
      return Session.set('purchaseErrors', errors);
    }

    var handler = StripeCheckout.configure({
      key: stripeData.publishableKey = stripeData.testPublishableKey,
      locale: 'auto',
      token: function(token) {
        $(".event-purchase").addClass('hidden');
        $(".event-reservation").removeClass('hidden');
      }
    });

    handler.open({
      email: user.email,
      name: this.trip.stripe_name,
      description: this.trip.stripe_description,
      currency: 'eur',
      amount: this.trip.stripe_amount
    });

  }
});

validatepurchase = function (user) {
  var errors = {};

  if(validate("firstName",user.firstName)){
    errors.firstName = validate("lastName",user.firstName)
  }

  if(validate("lastName",user.lastName)){
    errors.lastName = validate("lastName",user.lastName)
  }

  if(validate("email",user.email)){
    errors.email = validate("lastName",user.email)
  }

  if(validate("terms",user.terms)){
    errors.terms = validate("terms",user.terms)
  }

  return errors;
}
