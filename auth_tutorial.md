# Authorization Flow with Node SDK

To make requests to a vehicle from a web or mobile application, your end user must connect their vehicle using Smartcar's authentication flow. This flow follows the [OAuth](https://oauth.net/2/) spec and will return an authorization `code` which can be used to obtain an `access_token` from Smartcar.

[Learn more about our authorization process.]()

To obtain the authorization `code`, there are three steps -
1. [Launch Smartcar authorization dialog]() - Your application redirects a vehicle owner to the Smartcar authentication dialog.
2. [Smartcar Prompts for Consent]() - Smartcar prompts the vehicle owner to log in and approve the requested permissions.
3. [Handle Smartcar Response]() - Handle the authorization `code` returned by Smartcar and exchange it for an access `token`

***

## Step 1: Launch Smartcar authorization dialog
A user has to grant your application access to their vehicles, therefore your application has to redirect them to Smartcar's authentication dialog.

To do this, you will first need to set up your Smartcar auth client and retrieve the url to redirect your user to.

```javascript
// ./index.js

const smartcar = require('smartcar');

const client = new smartcar.AuthClient({
  cliendId: 'yourClientId',
  clientSecret: 'yourClientSecret',
  redirectUri: 'http://localhost:8080/callback',
  testMode: true,
});

app.get('/login', function(req, res) {
  const link = client.getAuthUrl();
  res.redirect(link);
});
```

The [`testMode` parameter](https://www.smartcar.com) is set to `true` to allow you to send a request to simulated accounts and vehicles on the Smartcar platform.

## Step 2: Smartcar Prompts for Consent

In this step, Smartcar displays a consent window that prompts the vehicle owner to log in with their connected car credentials. The owner will then decide if they wish to grant your application access to their vehicle.

If all goes well, you can move on to the next step!

### Try It Out
Let's try authenticating a vehicle in `test` mode. Remember, in `test` mode, any login credentials for all brands are valid!

Restart your server, open up your browser and go to `http://localhost:8000/login`.

Notice once you log in, Smartcar showcases all the permissions a developer is asking for. A user has to consent to all the permissions!

## Step 3: Handle Smartcar Response
If the user grants your application access to the set of permissions, Smartcar will return an authorization `code` to your `redirect_uri` as a query parameter.

In the previous section, we had set our `redirect_uri` as `localhost:8000/callback`. Now, our server can be set up as follows to handle the authorization `code`.
```javascript
// ./index.js

app.get('/callback', function(req, res) {
  const code = req.query.code;
});
```

***

In the next section, we will cover how to exchange the authorization `code` for an `accessToken` and make your first request to Smartcar API with it!
