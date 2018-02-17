stripeData = {
  "testSecretKey": "",
  "liveSecretKey": ""
};

var absoluteUrl = Meteor.absoluteUrl();

if(!absoluteUrl.includes("app.eventos.gg")){
  console.log("[Stripe] Test Mode ON");
  Stripe = StripeAPI(stripeData.testSecretKey);
}else{
  console.log("[Stripe] Live Mode ON");
  Stripe = StripeAPI(stripeData.liveSecretKey);
}
