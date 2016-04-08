import DS from 'ember-data';

export default DS.Model.extend({
  restaurantName: DS.attr(),
  address: DS.attr(),
  phone: DS.attr(),
  image: DS.attr(),
  // comments: hasMany('comment', {async: true})
});
