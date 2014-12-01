Unleashed.Park = DS.Model.extend({
  name: DS.attr('string'),
  imgUrl: DS.attr('string'),
  description: DS.attr('string')
});

Unleashed.Park.FIXTURES = [
 {
   id: 1,
   name: 'Learn Ember.js',
   imgUrl: 'something'
 },
 {
   id: 2,
   name: '...',
   imgUrl: 'something'
 },
 {
   id: 3,
   name: 'Profit!',
   imgUrl: 'something'
 }
];