Unleashed.ParkNewCommentController = Ember.Controller.extend({ 
		needs: ['park'],
	    actions : {
	        save: function () {
	            if (!this.get('text')) { return; }//Do Nothing if text field is blank;
	            var comment = this.store.createRecord('comment', {
	                commenter: this.get('commenter'),
	                date: (new Date()).toDateString(),
	                text: this.get('text')
	            });

	            comment.save();

	            var park = this.get('controllers.park.model');
            	console.log(comment);
            	park.get('comments').pushObject(comment);
            	park.save();

	        }    
	    }        
});       
 