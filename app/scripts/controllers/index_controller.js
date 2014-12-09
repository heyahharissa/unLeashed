Unleashed.IndexRoute = Ember.Route.extend({
	model: function () {
		return this.store.find('park');
	}
});

Unleashed.IndexController = Ember.Controller.extend({
	needs: ['application'],
    name: "You Are Here",

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
	 	var parks = this.get('model').map(function (park) {
	 		var lat_long = park.get('location').split(',');
	 		return Ember.Object.create({
	 			latitude: lat_long[0],
	 			longitude: lat_long[1],
	 			name: park.get('name')
	 		});
		})
		console.log(parks)
		return [Ember.Object.create(this.getProperties('latitude','longitude', 'name'))].concat(parks);
	}.property('latitude', 'longitude')

});
