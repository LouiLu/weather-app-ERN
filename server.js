const express = require('express');
const bodyParser = require('body-parser');

// include routes
const weather = require('./routes/api/weather');

const app = express();

// init body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use routes
app.use('/api/weather', weather);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server Runs On Port: ${port}`));
