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
    	var markers = this.get('markers');
    	var map = this.get('map');
        markers.forEach(function (marker) {
            var coords = new google.maps.LatLng(marker.get('latitude'), marker.get('longitude'));
            var contentString = '<div id="content">'+
              '<h3>' + '<a href="/#/parks/'+ marker.get('parkID') +'">' + marker.get('name') + '</a></h3>'+
              '</div>';

            var infowindow = new google.maps.InfoWindow({
              content: contentString
            });
            var marker = new google.maps.Marker({
                position: coords,
                map: map,
                animation: google.maps.Animation.DROP,
                title: marker.get('name')
            });
            google.maps.event.addListener(marker, 'click', function() {
              infowindow.open(map, marker);
            });
        });
    }

});
