const express = require('express');
const router = express.Router();
const request = require('request');

const keys = require('../../config/keys');

// @route       GET api/weather/test
// @description test
// @access      Public
router.get('/test', (req, res) => res.json({ msg: 'Weather Routes working!' }));

// @route       GET api/weather/:city
// @description Get weather by city name
// @access      Public
router.get('/city=:city', (req, res) => {
  let url = `${keys.openMapApiUrl}${req.params.city}&appid=${keys.openMapApi}`;

  request(url, (error, response, body) => {
    if (error) {
      res.send({ weather: null, error: `Server Error: ${error.message}` });
    } else {
      let weather = JSON.parse(body);
      if (weather.main == undefined) {
        res.send({
          weather: null,
          error: weather
        });
      } else {
        res.send({ weather: weather, error: null });
      }
    }
  });
});

module.exports = router;
