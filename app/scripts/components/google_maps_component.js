Unleashed.GoogleMapsComponent = Ember.Component.extend({
	insertMap: function() {
    	var container = this.$(".map-canvas");

    	var options = {
        	center: new google.maps.LatLng(this.get("latitude"), this.get("longitude")),
      		zoom: 17,
      		mapTypeId: google.maps.MapTypeId.ROADMAP
    	};

    	var map = new google.maps.Map(container[0], options);
    	this.set('map', map);
    	this.generatePin();
  	}.on('didInsertElement'),

    onMarkerChange: function() {
    	this.generatePin();
    }.observes('markers'),

    generatePin: function() {
    	var marker = this.get('markers')[0];
    	var map = this.get('map');
    	var coords = new google.maps.LatLng(marker.get('latitude'), marker.get('longitude'));
    	var marker = new google.maps.Marker({
    		position: coords,
    		map: map
    	});
    }

});
