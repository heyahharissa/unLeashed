Unleashed.ApplicationRoute = Ember.Route.extend({
<<<<<<< HEAD
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {
        return ['park1 in app route', 'park2', 'park3'];
=======
	model: function () {
      return ['red', 'yellow', 'blue'];
>>>>>>> master
    }
});
