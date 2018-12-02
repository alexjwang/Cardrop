import wixData from 'wix-data';
import {session} from 'wix-storage';


$w.onReady(function () {
	refreshItems();
});

//show available
export function datePicker1_change(event) {
	refreshItems();
}

export function datePicker2_change(event) {
	refreshItems();
}

function refreshItems() {
	let startDate = $w('#datePicker1').value;
	let endDate = $w('#datePicker2').value;

	session.setItem("startDateStr", startDate.toLocaleDateString());
	session.setItem("endDateStr", endDate.toLocaleDateString());

	let toCollapseId = [];

	wixData.aggregate("rentals")
		.run()
		.then( async (results) => {
			let items = results.items;
			let numItems = results.length;
			let hasNext = results.hasNext();
			for (var i = 0; i < results.length; i++) {
				let rental = items[i];
				let rentalStartDate = rental.firstDay;
				let rentalEndDate = rental.lastDay;

				//if they overlap
				if ((startDate <= rentalEndDate) && (endDate >= rentalStartDate)) {
					toCollapseId.push(rental.car);
				}
			}

			console.log(toCollapseId);

			await $w("#repeater1").forEachItem( ($item, itemData, index) => {
				if(toCollapseId.indexOf(itemData._id) !== -1) {
					$item("#container1").collapse();
				} else {
					$item("#container1").expand();
				}
			} )

		} )
		.catch( (error) => {
			let errorMsg = error.message;
			let code = error.code;
			console.log(error);
			console.log(code);
		} );
}