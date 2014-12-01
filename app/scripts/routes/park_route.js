Unleashed.ParkRoute = Ember.Route.extend({
  model: function(params) {
    return this.get('store').find('park', params.park_id);
  }
});

