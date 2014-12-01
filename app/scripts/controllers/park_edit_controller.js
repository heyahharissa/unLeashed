Unleashed.ParkEditController = Ember.ObjectController.extend({
  needs: 'park',
  actions: {
    save: function(){
      self = this
      this.get('buffer').forEach(function(attr){
        self.get('controllers.park.model').set(attr.key, attr.value);
      });
      this.transitionToRoute('park',this.get('model'));
    }
  }
});

