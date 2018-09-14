'use strict';

const express = require('express');
const smartcar = require('smartcar');

const app = express();
const port = 8000;

const client = new smartcar.AuthClient({
  clientId: 'yourClientId',
  clientSecret: 'yourClientSecret',
  redirectUri: 'http://localhost:8000/callback',
  development: true,
});

// global variable to save our accessToken
let access;

app.get('/', function(req, res) {
  const link = client.getAuthUrl();
  res.redirect(link);
});

app.get('/callback', function(req, res) {
  const code = req.query.code;

  return client.exchangeCode(code)
    .then(function(_access) {
      // in a production app you'll want to store this in some kind of persistent storage
      access = _access;
    });
});

app.get('/vehicle', function(req, res) {
  return smartcar.getVehicleIds(access.accessToken)
    .then(function(data) {
      // the list of vehicle ids
      return data.vehicles;
    })
    .then(function(vehicleIds) {
      // instantiate the first vehicle in the vehicle id list
      const vehicle = new smartcar.Vehicle(vehicleIds[0], access.accessToken);

      return vehicle.info();
    })
    .then(function(info) {
      console.log(info);
      // {
      //   "id": "36ab27d0-fd9d-4455-823a-ce30af709ffc",
      //   "make": "TESLA",
      //   "model": "Model S",
      //   "year": 2014
      // }

      res.json(info);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
