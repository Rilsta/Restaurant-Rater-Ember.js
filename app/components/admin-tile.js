import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    delete(restaurant) {
      if (confirm('Are you sure you want to delete this restaurant?')) {
        this.sendAction('destroyRestaurant', restaurant);
      }
    },
  }
});
