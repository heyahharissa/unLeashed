Unleashed.ParksNewParkController = Ember.ArrayController.extend({		
	actions: {
    	create : function(){
	      	var parkAttrs = this.getProperties('name', 'imgUrl','description','location','rating');
	      	var newPark = this.store.createRecord('park', parkAttrs);
	      	newPark.save();
	      	this.transitionToRoute('index');
    	},

    	setRating : function (rating) {
    		this.set('rating', rating);
    		console.log(this.get('rating'));
    	}
	}

 });
