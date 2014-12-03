/*global Ember*/
Unleashed.Park = DS.Model.extend({
    name: DS.attr('string'),

    imgUrl: DS.attr('string'),

    location: DS.attr('string'),

    description: DS.attr('string'),

    rating: DS.attr('number')
});

// probably should be mixed-in...
Unleashed.Park.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

