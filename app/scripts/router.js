Unleashed.Router.map(function () {
  
  this.resource('parks', function(){
    this.route('new_park');
  });
  this.resource('park', { path: 'parks/:id' }, function(){
    this.route('edit');
    this.route('new_comment');
    this.route('checkin');
  });
  this.resource('users');
  this.resource('user', { path: '/:id'}, function(){
    this.route('edit_user');
  });
  this.route('new_user');
});
