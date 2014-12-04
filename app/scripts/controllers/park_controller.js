Unleashed.ParkController = Ember.ObjectController.extend({
  deleteMode: false,

  userLocation: null,

  coords: function () {
    if (this.get('userLocation')) {
      return '(' + this.get('userLocation').coords.latitude + ', ' + this.get('userLocation').coords.longitude + ')';
    }
  }.property('userLocation'),

  actions: {
    delete: function(){
      // our delete method now only toggles deleteMode's value
      this.toggleProperty('deleteMode');
    },
    cancelDelete: function(){
      // set deleteMode back to false
      this.set('deleteMode', false);
    },
    confirmDelete: function(){
      // this tells Ember-Data to delete the current user
      this.get('model').deleteRecord();
      this.get('model').save();
      // and then go to the users route
      this.transitionToRoute('parks');
      // set deleteMode back to false
      this.set('deleteMode', false);
    },
    // the edit method remains the same
    edit: function(){
      this.transitionToRoute('park.edit');
    },

    location: function(){
      var that   = this;
      var getGeo = navigator.geolocation.getCurrentPosition(function(e){
        console.log(e);
        that.set('userLocation', e);
      });
    }
  }
});

