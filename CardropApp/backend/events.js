import wixData from 'wix-data';

export function wixPay_onPaymentUpdate(event) {

  let itemName = event.items.name;

  let transactionId = event.transactionId;

  let firstName = event.userInfo.firstName;
  let lastName = event.userInfo.lastName;
  let email = event.userInfo.email;

  let firstDay = new Date(event.firstDayStr);
  let lastDay = new Date(event.lastDayStr);
  let carId = event.carId;
  let numDays = event.numDays;

  let userId = event.user.id;

  let rental = {

    title: transactionId,

    firstName: firstName,
    lastName: lastName,
    email: email,

    car: carId,
    firstDay: firstDay,
    lastDay: lastDay,
    numDays : numDays,

    userId: userId,

    firstDayStr: firstDay.toLocaleDateString(),
		lastDayStr: lastDay.toLocaleDateString()

  };

  wixData.insert("rentals", rental);

}

