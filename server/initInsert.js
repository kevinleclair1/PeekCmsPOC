import {Units} from '../lib/Collections/collections.js';


if (Units.find().count() === 0){
		//insert initial test data in Mongo

		let unitData = JSON.parse(Assets.getText('testData.json'));
		console.log(unitData);
		unitData.inClassUnits.forEach(function(unit){
			Units.insert({
				label: unit.label,
				content: "Edit me here",
				grade: 0
			});
		})
}

