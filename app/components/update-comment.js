import Ember from 'ember';

export default Ember.Component.extend({
  updateCommentForm: false,
  actions: {
    updateCommentForm() {
      this.set('updateCommentForm', true);
    },
    update(comment) {
      var params = {
        userName: this.get('userName'),
        description: this.get('description'),
        rating: this.get('rating')
      };
      this.set('updateCommentForm', false);
      this.sendAction('update', comment, params);
    }
  }
});
