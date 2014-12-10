Unleashed.ParksRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('park');
    Unleashed.Route.transitionTo('park', park);
  }
});

