'use strict';

const express = require('express');
const smartcar = require('smartcar');

const app = express();
const port = 8000;

app.listen(port, () => console.log(`Listening on port ${port}`));
