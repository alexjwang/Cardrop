import {getInfos} from "backend/cars.jsw";
import {getLocation} from "backend/cars.jsw";
import {lock} from "backend/cars.jsw";
import {unlock} from "backend/cars.jsw";
import {timeRefresh} from "backend/cars.jsw";

$w.onReady(function () {

});

//the repeater of all the cars that the user has rented
export function repeater1_itemReady($item, itemData, index) {

	let rental = $w('#dataset1').getCurrentItem();
	let nowDate = new Date();
	let startDate = rental.firstDay;
	let endDate = rental.lastDay;
	let endDatePlusOne = rental.lastDay;
	endDatePlusOne.setDate(endDatePlusOne.getDate() + 1);

	let unlockButton = $item('#button5');
	let lockButton = $item('#button6');

	if(startDate <= nowDate && nowDate <= endDatePlusOne) {
		unlockButton.enable();
		lockButton.enable();
	} else {
		unlockButton.disable();
		lockButton.disable();	
	}

	//activate
	unlockButton.onClick(async () => {
		let smartCarId = await itemData.car.smartCarId;
		await unlock(smartCarId).then( function(response) {
			let x = response;
			console.log(x);
		})

    });

	//deactivate
	lockButton.onClick(async () => {
		let smartCarId = await itemData.car.smartCarId;
		await lock(smartCarId).then( function(response) {
			let x = response;
			console.log(x);
		})
    });

}

function activateClicked(smartCarId) {

}
