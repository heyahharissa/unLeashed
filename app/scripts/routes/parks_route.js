Unleashed.ParksRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('park');
  }
});

