Unleashed.ParkController = Ember.ObjectController.extend({
  deleteMode: false,

  stars: function () {
     if (this.get('rating') == 0 || null || undefined){
      return ['This park has not been rated'];
    } else if(this.get('rating') == 1) {
      return [1];
    } else if(this.get('rating') == 2){
      return[1,2];
    } else if(this.get('rating') == 3){
      return[1,2,3];
    } else if(this.get('rating') == 4){
      return[1,2,3,4];
    }  else if(this.get('rating') == 5){
      return[1,2,3,4,5];
    } else {
      return ["no rating"];
    }
  }.property('rating'),

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
    deleteComment: function(){
       this.get('model').deleteRecord();
       this.get('model').save();
       this.transitionToRoute('parks');
    }
  }
});

