/*global Ember*/
Unleashed.Park = DS.Model.extend({
    name: DS.attr('string'),

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

// delete below here if you do not want fixtures
Unleashed.Park.FIXTURES = [
  
  {
    id: 0,
    
    name: 'foo',
    
    location: 'foo',
    
    description: 'foo',
    
    rating: 'foo'
    
  },
  
  {
    id: 1,
    
    name: 'foo',
    
    location: 'foo',
    
    description: 'foo',
    
    rating: 'foo'
    
  }
  
];
