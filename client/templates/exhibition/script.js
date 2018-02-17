Template.exhibition.onCreated(function() {
  Session.set('exhibitionSlug', this.data.exhibition.slug);
});

Template.tripThumbnail.helpers({
  seatsProgress: function() {
    if(this.seats){
      return parseInt((parseInt(this.seats)/parseInt(this.seats_limit))*100)
    }else{
      return 0;
    }
  },
  seatsCount: function() {
    if(this.seats){
      return this.seats
    }else{
      return 0;
    }
  },
  sessionExhibitionSlug: function() {
    return Session.get('exhibitionSlug');
  }
});
