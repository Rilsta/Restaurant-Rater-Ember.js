import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(comment, params){
      debugger;
      this.sendAction('update', comment, params);
    }
  }
});
