Template.adminExhibition.onCreated(function() {
  Session.set('exhibitionsErrors', {});
  Session.set('exhibitionID', this.data.exhibition._id);
  Session.set('exhibitionSlug', this.data.exhibition.slug);
});

Template.adminExhibition.helpers({
  exhibitionOptionSelected: function(field,value){
    if(this.exhibition[field] == value){
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

Template.adminExhibitionTripRow.helpers({
  sessionExhibitionSlug: function(){
    return Session.get('exhibitionSlug');
  }
});
Template.adminExhibitionTripRow.events({
  'click .remove-trip': function(e) {
    e.preventDefault();
    tripSlug = $(e.target).attr('data-tripSlug');

    Meteor.call('removeTrip',Session.get('exhibitionID'),tripSlug,function(err,res) {

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

Template.adminExhibition.events({

  'submit #update-exhibition': function(e) {
    e.preventDefault();

    Session.set('exhibitionsErrors', {});

    var exhibition = {
      slug: $(e.target).find('[name=slug]').val(),
      status: $(e.target).find('[name=status]').val(),
      fullName: $(e.target).find('[name=fullName]').val(),


      thumbnail_img_url: $(e.target).find('[name=thumbnail_img_url]').val(),
      thumbnail_title: $(e.target).find('[name=thumbnail_title]').val(),
      thumbnail_subtitle: $(e.target).find('[name=thumbnail_subtitle]').val(),
      thumbnail_start_date: $(e.target).find('[name=thumbnail_start_date]').val(),
      thumbnail_end_date: $(e.target).find('[name=thumbnail_end_date]').val(),
      thumbnail_content: $(e.target).find('[name=thumbnail_content]').val(),

      page_img_url: $(e.target).find('[name=page_img_url]').val(),
      page_title: $(e.target).find('[name=page_title]').val(),
      page_subtitle: $(e.target).find('[name=page_subtitle]').val(),

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

    Meteor.call('updateExhibition',this.exhibition._id,exhibition,function(err,res) {
      swal.close();
          swal({
            title: TAPi18n.__('admin_exhibitions_update_success_title'),
            html: '<p>'+TAPi18n.__('admin_exhibitions_update_success_subtitle')+'</p>',
            type: 'success',
            confirmButtonText: TAPi18n.__('continue')
          });
    });



  }
});
