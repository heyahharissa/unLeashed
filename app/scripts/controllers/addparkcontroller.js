Unleashed.AddParkController = Ember.ArrayController.extend({
	actions: {
		create : function(){
			var parkAttrs = this.getProperties('name','imgurl','description');
			var park = this.store.createRecord('park', parkAttrs);
			park.save();
			this.transitionToRoute('index');
		}
	}
})