# twitch-chatbot

A chat bot for Twitch.tv.

## Requirements

- [Node.js](https://nodejs.org)

## Setup

1. Go to your [Twitch developer console](https://dev.twitch.tv/console/apps) and create a new application. If you don't know what a Redirect URI is, use `http://localhost`.
2. Copy `auth/.env` into this folder. Fill in Client ID, Client Secret, and Username.
3. Visit this site, with the `CLIENT_ID` and `REDIRECT_URI` placeholders replaced with your client ID and redirect URI, respectively:

```
https://id.twitch.tv/oauth2/authorize?client_id=CLIENT_ID
  &redirect_uri=REDIRECT_URI
  &response_type=code
  &scope=chat:read+chat:edit
```

Log in with the account you want to use for your bot and confirm the access to Twitch. You should get redirected to your redirect URI with a query parameter named `code`.

Make a `POST` request to this URL, again, with all placeholders replaced:

```
https://id.twitch.tv/oauth2/token?client_id=CLIENT_ID
  &client_secret=CLIENT_SECRET
  &code=CODE_FROM_LAST_REQUEST
  &grant_type=authorization_code
  &redirect_uri=REDIRECT_URI
```

4. Copy `auth/tokens.json` into this folder. Fill in Access Token and Refresh Token using the response data.
5. `npm install && node .`
