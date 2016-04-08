import Ember from 'ember';

export default Ember.Component.extend({
  favoriteRestaurants: Ember.inject.service(),
  numberOfFavorites: Ember.computed('favoriteRestaurants.favorites', function() {
    var favorites = this.get('favoriteRestaurants').favorites;
    var numberFavs = favorites.length;
    return numberFavs;
  })
});
