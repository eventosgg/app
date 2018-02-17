Meteor.publish('exhibitions', function() {
  return Exhibitions.find({status:"active"});
});
