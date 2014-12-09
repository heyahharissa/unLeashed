Unleashed.ParksController = Ember.ArrayController.extend({
    parksCount: function(){
    	return this.get('model.length');
  	}.property('@each')
});

