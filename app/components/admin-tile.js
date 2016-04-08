import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(restaurant, params) {
      this.sendAction('update', restaurant, params)
    },
    delete(restaurant) {
      if (confirm('Are you sure you want to delete this restaurant?')) {
        this.sendAction('destroyRestaurant', restaurant);
      }
    },
  }
});
