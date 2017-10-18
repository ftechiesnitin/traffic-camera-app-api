const request = require('request');
const async = require('async');
const cfg = require('../config.js');
const TrafficImages = require('../model/trafficImages');

var traffic = {

  getRealTimeImages: (req, res) => {
    var options = {
      url: cfg.lta.apis.trafficImages,
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'AccountKey': cfg.lta.accountKey
      }
    };

    request(options, (error, response, body) => {
      if(error || response.statusCode != 200) {
        res.status(500);
        return res.jsonp('internal-server-error');
      }
      return res.json(JSON.parse(body).value);
    });
  },

  getImagesFromDb: (req, res) => {
    TrafficImages.find({}, (error, trafficImagese) => {
      if(error) {
        res.status(500);
        return res.jsonp('internal-server-error');
      }

      return res.json(trafficImagese);
    });
  }
}

module.exports = traffic;
