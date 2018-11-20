# Set Up

Before we get started building our web application, we need to complete a few set up steps -
1. [Sign up for a Smartcar account](). Sign up for you Smartcar developer account
2. [Retrieve your API keys](). Retrieve your API keys so you can make requests to Smartcar
3. [Configure your redirect URI]() - Configure your application's redirect URI
4. [Initialize your application](). Download our starter kit so you can follow along with the rest of the guide

***

## Step 1: Sign up for a Smartcar Account
Go to our [Developer Dashboard](https://dashboard.smartcar.com/signup) to sign up with Smartcar.

## Step 2: Retrive your API keys
Once you have made your account, you will notice you already have an application with API keys. You will need these keys to complete this tutorial.

## Step 3: Configure your redirect URI
You will need to set a `redirect_uri` for your application. We will be using this in the next section. For now, you can just set it to `localhost:8000/callback`.

## Step 4: Initialize you application
Now that you have your application, clone our starter kit for the language of your choice to get started. In the clone repository, you will find the installed `Smartcar` SDK and a simple server set up.

```bash
$ git clone ...
$ cd smartcar
$ node index.js

Listening on port 8000.
```

***

Now that we've set up our application, let's learn more about Smartcar's authorization flow.

(add components for previous and next steps)
