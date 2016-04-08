import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },
    save(restaurant) {
      var params = {
        userName: this.get('userName'),
        description: this.get('description'),
        rating: this.get('rating')
      };
      this.set('addNewComment', false);
      this.sendAction('save', params);
    },
  }
});
