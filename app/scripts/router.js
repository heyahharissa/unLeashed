Unleashed.Router.map(function () {
  
  this.resource('parks', function(){
    this.resource('park', { path: '/:park_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
  
});
