The folder “CardropApp” contains the actual code for the website/application. The website is located at: https://cardrop.wixsite.com/cardrop.

The other files were what we used to locally test the functions for the smartcar API as well as to how we got access keys/renew access codes. Although they are not used in the final app, we left the files here in the repo in the event that we wish to test something separate from the website/application. 

## Background
Cardrop is an automated car-rental platform that we plan on licensing to rental car companies. Within the app, people wishing to rent a car can locate any nearby available Cardrop vehicles, rent them out and activate, unlock/lock their rented cars, and return the car to loosely set zones by the end of the designated trip. 
Unlike with today’s car rental services, Cardrop users would have the advantages of:
1) Not travelling long distances to arrive at pick-up or drop-off centers. Instead, the cars are dispersed across the city/area in designated zones and hotspots where cars can be picked up and dropped off with ease. 
2) Not waiting in line at pick-up centers and deal with counter services
3) Purchasing, activating, unlocking, and locking their vehicle with the press of a button from the app.
Rental car companies who use Cardrop would have the advantages of:
1) Not needing to build centers to house the cars--the cars can be parked anywhere (as long as it’s parked legally), within the loosely set zones. This means the number of potential locations would vastly increase, eliminating the costs of building and maintaining huge sites for car storage.
2) Not needing to hire as many employees (decreases costs).
3) Eliminating transfer of physical car keys and removing counter services/less travel time, making the company significantly more efficient (everything on both ends of the service can be done using the app, which takes substantially less time).
4) Expanding their pool of customers beyond just people who are in the area of the centers.
Within the app, a user can create an account, select which days they want to rent a car for, and select from a list of available car options.
Once the start date comes, the user gains the ability to interact with the car. Specifically, they can view the location of the car (guaranteed to be in a certain accessible zone). After reaching the car, they can unlock/lock the car via the app and start driving. At the end of their session, they must return the car to within the set zone (anywhere within the zone, as long as it’s parked legally). The flexibility of being able to park anywhere in the set zone is more convenient for both the user and company.

## Instructions to Run
Visit https://cardrop.wixsite.com/cardrop to use the app. To begin, click the ‘Browse Cars’ button on the home page, and you will be prompted to create an account with an email and password. After this, you will be able to select a start and end date for your desired trip, and the app will automatically show the cars available to rent during the specified trip. 
For testing purposes, select one of the cars that have the ‘[FREE]’ tag in their names, and proceed by clicking ‘More Info >’. The next screen will display the details of your reservation, and by clicking ‘Rent Now’, you will be directed to a confirmation screen. On click, the button ‘Continue’ will prompt a payment screen (for testing purposes, free cars will not prompt this screen). 
After a successful rental, you will be directed to a ‘Thank You’ screen, where you may now click the ‘My Rentals’ hyperlink or the ‘My Rentals’ button at the top of the page to view all your rentals. During the time of access specified by your reservation, the ‘Unlock’ and ‘Lock’ buttons will be available for use. Otherwise, they will be grayed out and cannot be used.
