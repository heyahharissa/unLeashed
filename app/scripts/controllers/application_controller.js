Unleashed.ApplicationController = Ember.ObjectController.extend({
	userLocation: null,

		coords: function () {
	    	if (this.get('userLocation')) {
	      		return '(' + this.get('userLocation').coords.latitude + ', ' + this.get('userLocation').coords.longitude + ')';
	    	}
	  	}.property('userLocation'),

	actions: {
		location: function(){
	  		var that   = this;
			var getGeo = navigator.geolocation.getCurrentPosition(function(e){
			console.log(e);
			that.set('userLocation', e);
	      	});
	    }
	}
});

