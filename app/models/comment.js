import DS from 'ember-data';

export default DS.Model.extend({
  userName: DS.attr(),
  rating: DS.attr(),
  description: DS.attr(),
  // restaurant: belongsTo('restaurant', {async: true})
});
