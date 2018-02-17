stripeData = {
  "testPublishableKey": "",
  "livePublishableKey": ""
};

var absoluteUrl = Meteor.absoluteUrl();

if(!absoluteUrl.includes("app.eventos.gg")){
  console.log("[Stripe] Test Mode ON");
  Stripe.setPublishableKey(stripeData.testPublishableKey);
  stripeData.publishableKey = stripeData.testPublishableKey
}else{
  console.log("[Stripe] Live Mode ON");
  Stripe.setPublishableKey(stripeData.livePublishableKey);
  stripeData.publishableKey = stripeData.livePublishableKey

}
