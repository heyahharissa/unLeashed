/*global Ember*/
Unleashed.User = DS.Model.extend({});

// probably should be mixed-in...
Unleashed.User.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
Unleashed.User.FIXTURES = [
  
  {
    id: 0,
    userName: 'alyssa'
    
  },
  
  {
    id: 1,
    userName:'Ryan'
  }
  
];
