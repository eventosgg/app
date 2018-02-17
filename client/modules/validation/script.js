validate = function(field,value) {
  var error = '';

  switch (field) {

    case 'email':
      if (!value){
        error = TAPi18n.__('error_email_empty');
      }else if(value.length < 5 || value.length > 150){
        error = TAPi18n.__('error_email_size');
      }
      break;

    case 'firstName':
      if (!value){
        error = TAPi18n.__('error_firstName_empty');
      }else if(value.length < 2 || value.length > 150){
        error = TAPi18n.__('error_firstName_size');
      }
      break;

    case 'lastName':
      if (!value){
        error = TAPi18n.__('error_lastName_empty');
      }else if(value.length < 3 || value.length > 150){
        error = TAPi18n.__('error_lastName_size');
      }
      break;

    case 'terms':
      if (!value){
        error = TAPi18n.__('error_terms_accept');
      }
      break;

  }
  return error;
}
