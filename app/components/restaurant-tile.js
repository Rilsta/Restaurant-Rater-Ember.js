import Ember from 'ember';

export default Ember.Component.extend({
  favoriteRestaurants: Ember.inject.service(),
  actions: {
    addToFavorites(favorite) {
      this.get('favoriteRestaurants').add(favorite);
    },
  }
});
