Unleashed.IndexController = Ember.Controller.extend({
	needs: ['application'],

	latitude: function () {
		var userLocation = this.get('controllers.application').userLocation;
		if (userLocation && userLocation.coords) {
			return userLocation.coords.latitude;
		}
	}.property('controllers.application.userLocation'),

	longitude: function () {
		var userLocation = this.get('controllers.application').userLocation;
		console.log(userLocation.coords);
		if (userLocation && userLocation.coords) {
			return userLocation.coords.longitude;
		}
	}.property('controllers.application.userLocation'),

	markers: function () {
		return [Ember.Object.create(this.getProperties('latitude','longitude'))]
	}.property('latitude', 'longitude')

});
