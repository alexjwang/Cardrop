# Authorization Flow with Node SDK

Now that you know what Smartcar is and have obtained your API keys, let's get started!

To make requests to a vehicle from a web or mobile application, your end user must connect their vehicle using Smartcar's authentication flow. This flow follows the [OAuth](https://oauth.net/2/) spec and will return an authorization `code` which can be used to obtain an access `token` from Smartcar. If you want to learn more about our authorization process, you can read our [Authorization](https://smartcar.com/docs?language=Python#authentication) guide.

To obtain the authorization `code`, there are three steps -
1. [Redirect to Smartcar]() - Your application redirects a vehicle owner to the Smartcar authentication dialog.
2. [Smartcar Prompts for Consent]() - Smartcar prompts the vehicle owner to log in and approve the requested permissions.
3. [Handle Smartcar Response]() - Handle the authorization `code` returned by Smartcar and exchange it for an access `token`

The rest of this section goes through each of steps in more detail. Before you start, you will need to install the [SDK](https://github.com/smartcar/node-sdk).

```bash
$ npm install --save smartcar
```

***

## Step 1: Redirect to Smartcar
A user has to grant your application access to their vehicles, therefore your application has to redirect them to Smartcar's authentication dialog.

To do this, you will first need to set up your Smartcar OAuth client and input the url to redirect your user after the Smartcar Authentication flow.

```javascript
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

_COMMENT_: Are there any code that the developer can run at this point to experience the Smartcar Auth Flow? I think we need to think about this part again. I can see how a developer will get lost because they do not see any of the Auth Flow right now.

In this step, Smartcar displays a consent window that prompts the vehicle owner to log in with their connected car credentials in live mode or test mode if the authorization flow is running in our test mode. The owner then decides if they wish to grant your application access to their vehicle.

If all goes well, you can move on to the next step!

_COMMENT_: We should not just have linkedin links to articles. Instead they should be linked naturally in the guide.
[Learn what a connected car credential is.](https://smartcar.com)

[Learn what test mode is.](https://smartcar.com/docs?language=cURL#testing)

## Step 3: Handle Smartcar Response
If the vehicle owner has granted your application permission, Smartcar responds with an authorization `code` sent to the `redirect_uri` you have provided.

Your server can be set up as follows to handle the `code`.
```javascript
app.get('/callback', function(req, res) {
  const code = req.query.code;
  console.log(code);
  // uuid
});
```
***

In the next section, we will cover how to exchange the authorization `code` for an `accessToken` and make your first request to Smartcar API with it!
