const request = require('request');
const async = require('async');
const TrafficImages = require('../model/trafficImages');
const cfg = require('../config.js');

var buildParallel = (arr) => {
  let parallelFunctionList = [];
  for(let i = 0; i < arr.length; i++) {
    parallelFunctionList.push(function (callback) {
      let images = new TrafficImages(arr[i]);
      images.save((error) => {
        return callback(error, arr[i])
      });
    });
  }

  return parallelFunctionList;
}

var asyncSave = (arr, callback) => {
  let getParallerFunc = buildParallel(arr);

  async.parallel(getParallerFunc, (err, results) => {
    return callback(err, results);
  });
}

var addTrafficImages = () => {
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
    if(error || response.statusCode != 200) return console.error(error);

    asyncSave(JSON.parse(body).value, (err, results) => {
      if(err) return console.error(error);

      return console.log('Traffic Images Loaded: ', results.length);
    });
  });
}

module.exports = addTrafficImages
