Unleashed.Router.map(function () {
  
  this.resource('parks', function(){
    this.resource('park', { path: '/:id' }, function(){
      this.route('edit');
      this.route('new_comment');
      this.route('checkin');
    });
    this.route('new_park');
  });
  this.resource('users');
  this.resource('user', { path: '/:id'}, function(){
    this.route('edit_user');
  });
  this.route('new_user');
});
