Router.route('/admin/', {
  name: 'adminWelcome',
  layoutTemplate: 'layoutAdmin'
});

Router.route('/admin/exhibitions', {
  name: 'adminExhibitions',
  layoutTemplate: 'layoutAdmin',
  waitOn: function() {
    return [
      Meteor.subscribe('adminExhibitions')
    ]
  },
  data: function() {
    return {
      exhibitions : Exhibitions.find()
    }
  }
});

Router.route('/admin/exhibition/:slug', {
  name: 'adminExhibition',
  layoutTemplate: 'layoutAdmin',
  waitOn: function() {
    return [
      Meteor.subscribe('adminExhibitions')
    ]
  },
  data: function() {
    return {
      exhibition : Exhibitions.findOne({slug:this.params.slug})
    }
  }
});

Router.route('/admin/exhibition/:slug/trips/add', {
  name: 'adminExhibitionTripsAdd',
  layoutTemplate: 'layoutAdmin',
  waitOn: function() {
    return [
      Meteor.subscribe('adminExhibitions')
    ]
  },
  data: function() {
    return {
      exhibition : Exhibitions.findOne({slug:this.params.slug})
    }
  }
});


Router.route('/admin/exhibition/:slug/trip/:tripSlug', {
  name: 'adminExhibitionTrip',
  layoutTemplate: 'layoutAdmin',
  waitOn: function() {
    return [
      Meteor.subscribe('adminExhibitions')
    ]
  },
  data: function() {
    exhibition = Exhibitions.findOne({slug:this.params.slug});
    var trip = {};
    if(exhibition){
      var tripSlug = this.params.tripSlug;
      trip = _.find(exhibition.trips, function(item) {
          return item.tripSlug == tripSlug;
      });
    }
    return {
      exhibition : exhibition,
      trip : trip
    }
  }
});

Router.route('/admin/exhibitions/add', {
  name: 'adminExhibitionsAdd',
  layoutTemplate: 'layoutAdmin',
  waitOn: function() {
    return [
      Meteor.subscribe('adminExhibitions')
    ]
  }
});
