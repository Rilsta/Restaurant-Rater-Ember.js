import Ember from 'ember';

export default Ember.Component.extend({
  addNewRestaurant: false,
  actions: {
    restaurantFormShow() {
      this.set('addNewRestaurant', true);
    },
    save() {
      var params = {
        restaurantName: this.get('restaurantName'),
        address: this.get('address'),
        phone: this.get('phone'),
        image: this.get('image'),
      };
      this.set('addNewRestaurant', false);
      this.set('restaurantName', undefined);
      this.set('address', undefined);
      this.set('phone', undefined);
      this.set('image', undefined);
      this.sendAction('save', params);
    }
  }
});
