Unleashed.ParksNewParkController = Ember.ArrayController.extend({
	needs: ['application'],

	location: function () {
		var a = this.get('controllers.application').coords;
		console.log(a);
		return a;
	}.property('controllers.application.coords'),


	actions: {
    	createPark : function(){
	      	var parkAttrs = this.getProperties('name', 'imgUrl','description','location','rating');
	      	var newPark = this.store.createRecord('park', parkAttrs);
	      	newPark.save();
	      	this.transitionToRoute('park');
    	},

    	setRating : function (rating) {
    		this.set('rating', rating);
    	}
	}

 });
