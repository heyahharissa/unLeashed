Unleashed.NewUserController = Ember.Controller.extend({ 
	actions: {
    	createUser: function(){
      	var userAttrs = this.getProperties('userName', 'userImgUrl');
      	var newUser = this.store.createRecord('user', userAttrs);
      	newUser.save();
      	this.transitionToRoute('users');
    	}
	}
});