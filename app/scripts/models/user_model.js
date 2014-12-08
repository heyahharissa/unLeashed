/*global Ember*/
Unleashed.User = DS.Model.extend({
  userName: DS.attr('string')
});

// probably should be mixed-in...
Unleashed.User.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

