import Ember from 'ember';

export function restaurantPopularity(params/*, hash*/) {
  var restaurant = params[0];

  if(restaurant.get('comments').get('length') >= 1 ) {
    return Ember.String.htmlSafe('<i class="fa fa-comments-o"></i>');
  }
}

export default Ember.Helper.helper(restaurantPopularity);
