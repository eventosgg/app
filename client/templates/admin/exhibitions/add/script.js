Template.adminExhibitionsAdd.onCreated(function() {
  Session.set('exhibitionsErrors', {});
  Session.set('sessionSlug', '');
});

Template.adminExhibitionsAdd.helpers({
  errorMessage: function(field) {
    return Session.get('exhibitionsErrors')[field];
  },
  errorClass: function (field) {
    return !!Session.get('exhibitionsErrors')[field] ? 'has-error' : '';
  },
  errorExists: function (field) {
    return !!Session.get('exhibitionsErrors')[field] ? true : false;
  },
  sessionSlug: function () {
    if(Session.get('sessionSlug') != ""){
      return Session.get('sessionSlug');
    }else{
      return '{slug}'
    }
  },
});

Template.adminExhibitionsAdd.events({
  'keyup #slug': function(e) {
    Session.set('sessionSlug', $(e.target).val());
  },
  'submit form': function(e) {
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

    Exhibitions.insert(exhibition);

    swal({
      title: TAPi18n.__('admin_exhibitions_add_success_title'),
      html: '<p>'+TAPi18n.__('admin_exhibitions_add_success_subtitle')+'</p>',
      type: 'success',
      confirmButtonText: TAPi18n.__('continue')
    }).then(function(res){
      Router.go('/admin/exhibitions')
    });

  }
});
