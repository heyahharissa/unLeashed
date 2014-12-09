Unleashed.ParkCheckinController = Ember.Controller.extend({
		needs: ['park'],
	    actions : {
	        checkIn: function () {
	            var checkin = this.store.createRecord('checkin', {
	                userName: this.get('userName'),
	                date: (new Date()).toDateString(),
	            });

	            checkin.save();

	            var checked = this.get('controllers.park.model');
            	console.log(checkin);
            	checked.get('checkins').pushObject(checkin);
            	checked.save();

            	this.transitionToRoute('park');
	        }    
	    }    

 });


