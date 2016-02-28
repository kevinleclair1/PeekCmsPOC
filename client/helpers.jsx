import {Units} from '../lib/Collections/collections.js';

export const setSelectedUnit = unitLabel => {
	console.log(`${unitLabel} is being selected`);
	var activeUnit = Units.find().fetch().filter(unit => {
	  return unitLabel === unit.label
	});
	Session.set('selectedUnit', activeUnit[0]);
}