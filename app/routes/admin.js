import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('restaurant');
  },
  actions: {
    save(params) {
      var newRestaurant = this.store.createRecord("restaurant", params);
      newRestaurant.save();
      this.transitionTo('admin');
    },
    update(restaurant, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          restaurant.set(key,params[key]);
        }
      });
      restaurant.save();
      this.transitionTo('admin');
    },
    destroyRestaurant(restaurant) {
      restaurant.destroyRecord();
      this.transitionTo('admin');
    }
  }
});
