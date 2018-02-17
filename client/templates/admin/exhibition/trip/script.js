Template.adminExhibitionTrip.onCreated(function() {
  Session.set('exhibitionsErrors', {});
});

Template.adminExhibitionTrip.helpers({
  tripOptionSelected: function(field,value){
    if(this.trip[field] == value){
      return 'selected'
    }else{
      return ''
    }
  },
  errorMessage: function(field) {
    return Session.get('exhibitionsErrors')[field];
  },
  errorClass: function (field) {
    return !!Session.get('exhibitionsErrors')[field] ? 'has-error' : '';
  },
  errorExists: function (field) {
    return !!Session.get('exhibitionsErrors')[field] ? true : false;
  }
});

Template.adminExhibitionTrip.events({
  'submit form': function(e) {
    e.preventDefault();

    Session.set('exhibitionsErrors', {});

    var trip = {
      tripSlug: $(e.target).find('[name=tripSlug]').val(),
      status: $(e.target).find('[name=status]').val(),
      fullName: $(e.target).find('[name=fullName]').val(),

      seats_limit: $(e.target).find('[name=seats_limit]').val(),
      seats: $(e.target).find('[name=seats]').val(),

      thumbnail_img_url: $(e.target).find('[name=thumbnail_img_url]').val(),
      thumbnail_title: $(e.target).find('[name=thumbnail_title]').val(),
      thumbnail_subtitle: $(e.target).find('[name=thumbnail_subtitle]').val(),
      thumbnail_start_date: $(e.target).find('[name=thumbnail_start_date]').val(),
      thumbnail_end_date: $(e.target).find('[name=thumbnail_end_date]').val(),
      thumbnail_content: $(e.target).find('[name=thumbnail_content]').val(),

      page_img_url: $(e.target).find('[name=page_img_url]').val(),
      page_title: $(e.target).find('[name=page_title]').val(),
      page_subtitle: $(e.target).find('[name=page_subtitle]').val(),
      page_start_date: $(e.target).find('[name=thumbnail_start_date]').val(),
      page_end_date: $(e.target).find('[name=thumbnail_end_date]').val(),
      page_content_html: $(e.target).find('[name=page_content_html]').val(),

      stripe_name: $(e.target).find('[name=stripe_name]').val(),
      stripe_description: $(e.target).find('[name=stripe_description]').val(),
      stripe_currency: $(e.target).find('[name=stripe_currency]').val(),
      stripe_amount: $(e.target).find('[name=stripe_amount]').val()

    };

    swal({
      imageUrl: '/assets/img/loader.gif',
      imageWidth: 52,
      imageHeight: 52,
      title: TAPi18n.__('loading_title'),
      html: '<p id="loader-msg">'+TAPi18n.__("admin_exhibitions_add_loading")+'</p><p class="small" class="m-b-20">'+TAPi18n.__("loading_subtitle")+'</p>',
      showConfirmButton: false,
      allowEscapeKey: false,
      allowOutsideClick: false
    });

    Meteor.call('updateTrip',exhibition._id,this.trip.tripSlug,trip,function(err,res) {
      swal.close();
          swal({
            title: TAPi18n.__('admin_exhibitions_add_success_title'),
            html: '<p>'+TAPi18n.__('admin_exhibitions_add_success_subtitle')+'</p>',
            type: 'success',
            confirmButtonText: TAPi18n.__('continue')
          }).then(function(res){
            //Router.go('/admin/exhibitions')
          });
    });


  }
});
