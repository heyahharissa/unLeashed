Unleashed.NewController = Ember.Controller.extend({	
	actions: {
	    create : function(){
	      var parkAttrs = this.getProperties('name', 'imgUrl','description');
	      var newPark = this.store.createRecord('park', parkAttrs);
	      newPark.save();
	      this.transitionToRoute('index');
	    }
  	}
 
 });
