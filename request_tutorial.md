# Making a Request with Node SDK
Now that you have your authorization `code`, let's get you an `access_token` so that you can make your first request!

To successfully make your first request, there are four steps -
1. [Obtain an Access Token]() - Exchange your authorization code for an `access_token`
2. [Get Vehicle Ids]() - Retrieve your user's vehicles
3. [Create a Vehicle]() - Instantiate a Smartcar vehicle
4. [Make a Request to Smartcar API]()

The rest of this section goes through each of steps in more detail.

***

## Step 1: Obtain an Access Token
In the previous section, we retrieved an authorization `code`. Let's exchange that for the `access_token` required to make your first request.

```javascript
// ./index.js

// global variable to save our accessToken
let access;

app.get('/callback', function(req, res) {
  const code = req.query.code;

  return client.exchangeCode(code)
    .then(function(_access) {
      // in a production app you'll want to store this in some kind of persistent storage
      access = _access;

      // once you have the access token, redirect to the /vehicle endpoint which we will
      // implement in the next steps
      return res.redirect('/vehicle');
    })
});
```

## Step 2: Get Vehicle Ids
To send a request to a vehicle, you will first need its vehicle id.

A user's account may include more than one vehicle, all of which are displayed in the authorization dialog. The user may choose to grant your application access to any number of vehicles from the set.

To get the list of vehicle ids a user has granted you permission to -
```javascript
// ./index.js

app.get('/vehicle', function(req, res) {
  return smartcar.getVehicleIds(access.accessToken)
    .then(function(data) {
      // the list of vehicle ids
      return data.vehicles;
    });
});
```

## Step 3: Create a Vehicle
`Vehicle`'s are Smartcar objects that represent an actual vehicle, providing an easy way to make requests to a specific vehicle.

Before you make a request to a vehicle, let's instantiate a `Vehicle` object.

```javascript
// ./index.js

app.get('/vehicle', function(req, res) {
  return smartcar.getVehicleIds(access.accessToken)
    .then(function(data) {
      // the list of vehicle ids
      return data.vehicles;
    })
    .then(function(vehicleIds) {
      // instantiate the first vehicle in the vehicle id list
      const vehicle = new smartcar.Vehicle(vehicleIds[0], access.accessToken);
    });
});
```

## Step 4: Make a Request to Smartcar API
Now that you have your user's vehicle instantiated, you're ready to make your first request!

Let's make a request to Smartcar to get some information about the vehicle.
```javascript
// ./index.js

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
      console.log(data);
      // {
      //   "id": "36ab27d0-fd9d-4455-823a-ce30af709ffc",
      //   "make": "TESLA",
      //   "model": "Model S",
      //   "year": 2014
      // }

      res.json(data);
    });
});
```

### Try It Out
Now that we've written the code to make our first request, let's actually make a request and see what we get back!

Ensure you have restarted your server. Go to `http://localhost:8000/login` and authenticate your vehicle. Once authenticated, you will see the vehicle information on your browser!
***

## Next Steps
You've successfully made your first request to Smartcar!

[For more information about what our API can do, take a look at our API Reference.]()

[Learn about on Smartcar.]()

[Learn about the various application architectures Smartcar supports.]()


Happy coding!
