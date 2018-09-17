# Getting Started with Smartcar

Smartcar is a connected car API that allows mobile and web applications to communicate with connected vehicles across brands (think “check odometer” or “unlock doors.”). This guide will help you get up and running with the Smartcar API.

We will create a simple web application that displays your car information. (insert picture)

At the end of this guide, you will have learned how Smartcar works, how to get your API keys, learned about our authentication process and made your first request to Smartcar using your preferred SDK.  

## How Does Smartcar Work

[Insert request sequence graphics]

## Register on the Developer Dashboard

[Link to Sign Up]

## Initialize Your Application
Now that you have your keys, let's initialize your application directory and get a server up and running.

```bash
$ mkdir getting-started-node-sdk
$ cd getting-started-node-sdk
$ npm init
```

We will use the [Express](https://expressjs.com/) for our web application framework. Let's install it and get it set up!
```bash
$ npm install --save express
```

Let's create a server using Express that listens on the port 8080.

```javascript
// index.js

const express = require('express');

const app = express();
const port = 8080;

app.listen(port, () => console.log(`Listening on port ${port}.`));
```

Make sure the server initializes correctly.

```bash
$ node index.js
```
