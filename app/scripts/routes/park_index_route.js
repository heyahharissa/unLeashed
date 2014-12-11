Unleashed.ParkIndexRoute = Ember.Route.extend({
  model: function(params) {
    console.log(params);
    //return this.store.find('park', params['id']);
  }
});
