Unleashed.UsersController = Ember.ObjectController.extend({
  	actions: {
    	createUser : function(){
      	var userAttrs = this.getProperties('userName');
      	var newUser = this.store.createRecord('User', userAttrs);
      	newUser.save();
      	this.transitionToRoute('users');
    	}
	}
});

