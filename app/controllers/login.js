import Ember from "ember";

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  actions: {
    login() {
      const name = Ember.$('#name').val().trim();
      const password = Ember.$('#password').val().trim();
      if(name === "Luke" && password === "skywalker") {
        this.transitionToRoute('rentals');
      }
    }
  }
});