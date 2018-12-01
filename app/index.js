'use strict';

const cors = require('cors');
const express = require('express');
const smartcar = require('smartcar');

const app = express()
  .use(cors());
const port = 8000;

const client = new smartcar.AuthClient({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUri: process.env.REDIRECT_URI,
  scope: ['read_vehicle_info','read_location','read_odometer','control_security', 'control_security:unlock', 'control_security:lock'], 
  testMode: true,
});

// global variable to save our accessToken
let access;

<<<<<<< HEAD
// 3. Create a page with a 'Connect Car' button.
=======
>>>>>>> d53a6002cabee9b01772603c751157d2483d818f
app.get('/', function(req, res, next) {
  const authUrl = client.getAuthUrl({forcePrompt: true});
  res.send(`
    <h1>Hello, World!</h1>
    <a href=${authUrl}>
      <button>Connect Car</button>
    </a>
  `);
<<<<<<< HEAD
=======
});

app.get('/login', function(req, res) {
  const link = client.getAuthUrl();
  res.redirect(link);
>>>>>>> d53a6002cabee9b01772603c751157d2483d818f
});

// app.get('/login', function(req, res) {
//   const link = client.getAuthUrl();
//   res.redirect(link);
// });

app.get('/exchange', function(req, res) {
  const code = req.query.code;
  return client.exchangeCode(code)
    .then(function(_access) {
      // in a production app you'll want to store this in some kind of persistent storage
      access = _access;

      res.sendStatus(200);
    });
});

let arrInfo = [];

let id = "12f815bb-c679-45dd-9e2a-b212725c3c65";
let index=-1;

app.get('/vehicle', function(req, res) {
  return smartcar.getVehicleIds(access.accessToken)
    .then(function(data) {
      // the list of vehicle ids
      return data.vehicles;
    })
    .then(function(vehicleIds) {
      // instantiate the first vehicle in the vehicle id list
      
      for(let i=0; i<vehicleIds.length; i++){
        let vehicle = new smartcar.Vehicle(vehicleIds[i], access.accessToken);        
        arrInfo.push(vehicle.info());
      }
       return Promise.all(arrInfo);
      })
      .then(function(infos) {
        for(let i=0; i<infos.length; i++) {
          if(infos[i].id == id) {
            index=i;
          }
        } 
        console.log(infos);
        res.json(infos)
      });
});


app.get('/location', function(req, res) {
  return smartcar.getVehicleIds(access.accessToken)
    .then(function(data) {
      // the list of vehicle ids
      return data.vehicles;
    })
    .then(function(vehicleIds) {
      // instantiate the first vehicle in the vehicle id list
      let arrLocations = [];
      for(let i=0; i<vehicleIds.length; i++){
        let vehicle = new smartcar.Vehicle(vehicleIds[i], access.accessToken); 
        arrLocations.push(vehicle.location());
      }
      return Promise.all(arrLocations);
    })
    .then(function(locations) {
      console.log(locations);
      res.json(locations);
    });
});


app.get('/odometer', function(req, res) {
  return smartcar.getVehicleIds(access.accessToken)
    .then(function(data) {
      // the list of vehicle ids
      return data.vehicles;
    })
    .then(function(vehicleIds) {
      // instantiate the first vehicle in the vehicle id list
      let arrOdometer = [];
      for(let i=0; i<vehicleIds.length; i++){
        let vehicle = new smartcar.Vehicle(vehicleIds[i], access.accessToken);       
        arrOdometer.push(vehicle.odometer());
      }
      return Promise.all(arrOdometer);
    })
    .then(function(odometer) {
      console.log(odometer);
      res.json(odometer);
    });
});

<<<<<<< HEAD
app.get('/lock', function(req, res) {
  return smartcar.getVehicleIds(access.accessToken)
    .then(function(data) {
      // the list of vehicle ids
      return data.vehicles;
    })
    .then(function(vehicleIds) {
      // instantiate the first vehicle in the vehicle id list
      const vehicle = new smartcar.Vehicle(vehicleIds[0], access.accessToken);       
      return vehicle.lock();
    })
    .then(function(response) {
      console.log(response);
      res.json(response);
    });
});

app.get('/unlock', function(req, res) {
=======
   

app.get('/'+id+'/lock', function(req, res) {
  return smartcar.getVehicleIds(access.accessToken)
  .then(function(data) {
    // the list of vehicle ids
    return data.vehicles;
  })
  .then(function(vehicleIds) {
    // instantiate the index'th vehicle in the vehicle id list
    
    const vehicle = new smartcar.Vehicle(vehicleIds[index], access.accessToken);       
    return vehicle.lock();
  })
  .then(function(response) {
    console.log(response);
    res.json(response);
  });
});

app.get('/'+id+'/unlock', function(req, res) {
>>>>>>> d53a6002cabee9b01772603c751157d2483d818f
  return smartcar.getVehicleIds(access.accessToken)
    .then(function(data) {
      // the list of vehicle ids
      return data.vehicles;
    })
    .then(function(vehicleIds) {
<<<<<<< HEAD
      // instantiate the first vehicle in the vehicle id list
      const vehicle = new smartcar.Vehicle(vehicleIds[0], access.accessToken);       
=======
      // instantiate the index'th vehicle in the vehicle id list
      const vehicle = new smartcar.Vehicle(vehicleIds[index], access.accessToken);       
>>>>>>> d53a6002cabee9b01772603c751157d2483d818f
      return vehicle.unlock();
    })
    .then(function(response) {
      console.log(response);
      res.json(response);
    });
});

<<<<<<< HEAD

=======
>>>>>>> d53a6002cabee9b01772603c751157d2483d818f
// app.get('\disconnect', function(req,res) {
//   return smartcar.getVehicleIds(access.accessToken)
//     .then(function(data) {
//       // the list of vehicle ids
//       return data.vehicles;
//     })
//     .then(function(vehicleIds) {
//       // instantiate the first vehicle in the vehicle id list
//       const vehicle = new smartcar.Vehicle(vehicleIds[0], access.accessToken);       
//       vehicle.disconnect().then(function(response) {
//         console.log(response);
//       });
//     }) 
// });

<<<<<<< HEAD
app.listen(port, () => console.log(`Listening on port ${port}`));
=======





app.listen(port, () => console.log(`Listening on port ${port}`));
>>>>>>> d53a6002cabee9b01772603c751157d2483d818f
