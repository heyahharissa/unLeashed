Unleashed.ApplicationRoute = Ember.Route.extend({
	beforeModel: function(transition) {
	    var applicationController = this.controllerFor('application');
	    if (!applicationController.get('userLocation')){
	    	applicationController.send('location');
	    }
    }
})