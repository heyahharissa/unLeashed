Unleashed.ParksRoute = Ember.Route.extend({
    model: function() {
    	    return [{
	        name: 'name',
	        imgURL: "img goes here",
	        description: 'this is a description'
	      }, {
	        name: "name two",
	        imgURL: "http://emberjs.com/images/about/ember-structure-sm.png",
	        description: 'this is a description'
	      }];
    	}
});