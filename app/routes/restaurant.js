import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('restaurant', params.restaurant_id);
  },
  actions: {
    save(params) {
        var newComment = this.store.createRecord('comment', params);
        var restaurant = params.restaurant;
        restaurant.get('comments').addObject(newComment);
        newComment.save().then(function() {
          return restaurant.save();
        });
        this.transitionTo('restaurant', params.restaurant);
    },
    update(comment, params) {
        Object.keys(params).forEach(function(key) {
          if (params[key] !== undefined) {
            comment.set(key,params[key]);
          }
        });
        comment.save();
        this.transitionTo('restaurant');
      },
  }
});
