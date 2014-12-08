Unleashed.UserRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('user', params.id);
  }
});

