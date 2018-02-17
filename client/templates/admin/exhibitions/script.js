Template.adminExhibitions.events({
  'click .exhibition-delete': function(e) {
    e.preventDefault();
    exhibition_id = $(e.target).attr('data-id');
    Exhibitions.remove(exhibition_id);
  }
});
Template.adminExhibitionsRow.helpers({
  'countTrips': function() {
    if(this.trips){
      return this.trips.length;
    }else{
      return 0;
    }
  }
});
