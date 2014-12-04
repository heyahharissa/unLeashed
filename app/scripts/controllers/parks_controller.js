Unleashed.ParksController = Ember.ObjectController.extend({
    parksCount: function(){
    	return this.get('model.length');
  	}.property('@each')
});

