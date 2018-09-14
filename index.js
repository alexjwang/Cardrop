'use strict';

const express = require('express');
const smartcar = require('smartcar');
const opn = require('opn');

const app = express();
const port = 8000;

const client = new smartcar.AuthClient({
  clientId: 'feea9f20-4c18-438e-97b1-62115a3800a9',
  clientSecret: '23a64300-9e85-43eb-b8ac-89907e7a6cc4',
  redirectUri: 'http://localhost:8000/callback',
  development: true,
});

let access;

app.get('/', function(req, res) {
  const link = client.getAuthUrl();
  opn(link);
  res.end();
});

app.get('/callback', function(req, res, next) {
  if (req.query.error) {
    return next(new Error(req.query.error));
  }

  return client.exchangeCode(req.query.code)
    .then(function(_access) {
      // in a production app you'll want to store this in some kind of persistent storage
      access = _access;
      // return res.redirect('/vehicles');
    });
});

app.get('/vehicles', function(req, res, next) {
  return smartcar.getVehicleIds(access.accessToken)
    .then(function(data) {
      // the list of vehicle ids
      return data.vehicles;
    }).
    then(function(vehicleIds) {
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
