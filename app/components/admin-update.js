import Ember from 'ember';

export default Ember.Component.extend({
  restaurantUpdateForm: false,
  actions: {
    restaurantUpdateForm() {
      this.set('restaurantUpdateForm', true);
    },
    update(restaurant) {
      var params = {
        restaurantName: this.get('restaurantName'),
        address: this.get('address'),
        phone: this.get('phone'),
        image: this.get('image')
      };
      this.set('restaurantName', undefined);
      this.set('address', undefined);
      this.set('phone', undefined);
      this.set('image', undefined);
      this.set('restaurantUpdateForm', false);
      this.sendAction('update', restaurant, params);
    }
  }
});
