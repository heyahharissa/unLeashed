Unleashed.ParksNewParkRoute = Ember.Route.extend({
  model: function() {
    return this.get('store').find('new');
  }
});
