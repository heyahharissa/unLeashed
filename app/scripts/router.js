Unleashed.Router.map(function () {
  this.route('parks', {path: '/parks'});
  this.route('park', {path: '/parks/:name'});
  this.route('add_park', {path: '/parks/new'});
});
