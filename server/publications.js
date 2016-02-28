import {Units} from '../lib/Collections/collections.js';

Meteor.publish('units', function(){
	return Units.find();
});