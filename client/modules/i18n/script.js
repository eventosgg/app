var allowedLangs = ['en','es'];

getUserLanguage = function () {
  var userLang = navigator.language || navigator.userLanguage;
  var defaultLang = 'es';
  if(_.contains(allowedLangs,userLang)){
    return userLang;
  }else{
    return defaultLang;
  }
};

if (Meteor.isClient) {
  Meteor.startup(function () {
    Session.set("showLoadingIndicator", true);

    TAPi18n.setLanguage(getUserLanguage())
      .done(function () {
        Session.set("showLoadingIndicator", false);
      })
  });
}
