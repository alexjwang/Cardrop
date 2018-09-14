'use strict';

const express = require('express');
const smartcar = require('smartcar');
const opn = require('opn');

const app = express();
const port = 8000;

const client = new smartcar.AuthClient({
  clientId: 'yourClientId',
  clientSecret: 'yourClientSecret',
  redirectUri: 'http://localhost:8000/callback',
  development: true,
});


app.get('/', function(req, res) {
  const link = client.getAuthUrl();
  opn(link);
  res.end();
});

app.listen(port, () => console.log(`Listening on port ${port}`));
