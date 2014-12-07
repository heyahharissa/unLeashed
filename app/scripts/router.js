Unleashed.Router.map(function () {
  
  this.resource('parks', function(){
    this.resource('park', { path: '/:park_id' }, function(){
      this.route('edit');
      this.route('new_comment');
    });
  });
  this.route('new');
  this.resource('users', function() {
  	  this.resource('user', {path: '/:userName'}, function(){
  	  	this.route('edit_user');
  	  	this.route('new_user');
  	  });
  });
});
