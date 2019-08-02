## Description

The APP is built by ReactJS & ExpressJS.

## Open weather API key

Please prepare a open weather map API key from [Open Weather Map](https://openweathermap.org/)

1. Create keys_dev.js file under config folder
2. Store your own API key as openMapApi

## Scripts

Run for app test (make sure you in the root folder):

```
npm run dev
```

The above command will run our server on port 5000 and our React app on port 3000.

Run for server test:

```
npm run server
```

This will only run the server on port 5000, Postman is suggested for testing the APIs

## installation

Run for server npm installation:

```
npm i
```

Run for client npm installation:

```
npm run client-install
```

## Usage

1. A weather app to search weather based on city name
2. Frontend Redux state store
3. Open Weather API

## Deploy

I have setup the basic deploy preparation for this project, like the config keys files, but the server side static assets still need to be setup
