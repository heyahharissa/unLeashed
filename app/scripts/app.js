var Unleashed = window.Unleashed = Ember.Application.create();

Ember.FEATURES['ember-routing-drop-deprecated-action-style'] = true 

/* Order and include as you please. */
require('scripts/controllers/*');
require('scripts/store');
require('scripts/models/*');
require('scripts/routes/*');
require('scripts/components/*');
require('scripts/views/*');
require('scripts/router');
