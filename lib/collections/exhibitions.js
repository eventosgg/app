Exhibitions = new Mongo.Collection('exhibitions');

Exhibitions.allow({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});
