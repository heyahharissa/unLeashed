Unleashed.ParksRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('park');
  }
});

