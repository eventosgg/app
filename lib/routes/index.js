Router.configure({
  loadingTemplate: 'blockLoading',
  notFoundTemplate: 'error404'
});

Router.onBeforeAction(function() {
  this.next();
});

Router.route('/', {
  name: 'welcome',
  layoutTemplate: 'layoutApp',
  data: function(){
    return {
      exhibitions : listExhibitions()
    }
  }
});

Router.route('/exhibitions', {
  name: 'exhibitions',
  layoutTemplate: 'layoutApp',
  waitOn: function() {
    return [
      Meteor.subscribe('exhibitions')
    ]
  },
  data: function() {
    return {
      exhibitions : Exhibitions.find()
    }
  }
});

Router.route('/exhibition/:slug', {
  name: 'exhibition',
  layoutTemplate: 'layoutApp',
  waitOn: function() {
    return [
      Meteor.subscribe('exhibitions')
    ]
  },
  data: function() {
    return {
      exhibition : Exhibitions.findOne({slug:this.params.slug})
    }
  }
});

Router.route('/exhibition/:slug/trip/:tripSlug', {
  name: 'trip',
  layoutTemplate: 'layoutApp',
  waitOn: function() {
    return [
      Meteor.subscribe('exhibitions')
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

















var exhibitionsData = {
  "madrid-dreamhack" : {
    "slug" : "madrid-dreamhack",
    "thumbnail_title" : "DreamHack Valencia",
    "thumbnail_subtitle" : "Madrid - Valencia",
    "thumbnail_content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc felis, ultricies malesuada quam id, scelerisque euismod lorem. Integer et nisi eu eros dapibus ornare eget lobortis ante. Cras ac odio non nisl finibus blandit.",
    "thumbnail_price" : "23",
    "thumbnail_seats_limit" : "60",
    "thumbnail_travel_time" : "2h",

    "title" : "DreamHack Valencia",
    "subtitle" : "Madrid - Valencia",
    "content_html" : "<p>Esto es un contenido</p>",

    "stripe_amount" : "2000",
    "stripe_name" : "DreamHack Valencia",
    "stripe_description" : "Viaje desde Madrid",
    "stripe_currency" : "eur",
    "stripe_amount" : "2000"
  },
  "barcelona-dreamhack" : {
    "slug" : "madrid-dreamhack",
    "thumbnail_title" : "DreamHack Valencia",
    "thumbnail_subtitle" : "Madrid - Valencia",
    "thumbnail_content" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc felis, ultricies malesuada quam id, scelerisque euismod lorem. Integer et nisi eu eros dapibus ornare eget lobortis ante. Cras ac odio non nisl finibus blandit.",
    "thumbnail_price" : "23",
    "thumbnail_seats_limit" : "60",
    "thumbnail_travel_time" : "2h",

    "title" : "DreamHack Valencia",
    "subtitle" : "Madrid - Valencia",
    "content_html" : "<p>Esto es un contenido</p>",

    "stripe_amount" : "2000",
    "stripe_name" : "DreamHack Valencia",
    "stripe_description" : "Viaje desde Madrid",
    "stripe_currency" : "eur",
    "stripe_amount" : "2000"
  }
}
function listExhibitions(){
  var exhibitions = _.map(exhibitionsData, function(data, slug){
    return data;
  });
  return [exhibitionsData["barcelona-dreamhack"]];

  //return exhibitions;
}

function getEvent(slug){
  return exhibitionsData[slug];
}
