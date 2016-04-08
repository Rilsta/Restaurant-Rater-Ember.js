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
      this.set('restaurantName', "");
      this.set('address', "");
      this.set('phone', "");
      this.set('image', "");
      this.sendAction('save', params);
    }
  }
});
