/*global Ember*/
Unleashed.User = DS.Model.extend({
  userName: DS.attr('string'),
  userImgUrl: DS.attr('string'),
  breed: DS.attr('string')
});


