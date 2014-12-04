Unleashed.ParkEditController = Ember.ObjectController.extend({
  needs: ['park'],

  actions: {
    editPark: function () {
      this.get('model').save();
      this.transitionToRoute('index');
    }
  }
});
