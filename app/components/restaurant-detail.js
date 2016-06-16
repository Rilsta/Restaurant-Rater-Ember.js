import Ember from 'ember';

export default Ember.Component.extend({
  favoriteRestaurants: Ember.inject.service(),
  actions: {
    update(comment, params){
      this.sendAction('update', comment, params);
    },
    destroyComment(comment) {
      this.sendAction('destroyComment', comment);
    },
    addToFavorites(favorite) {
      this.get('favoriteRestaurants').add(favorite);
    },
  }
});
