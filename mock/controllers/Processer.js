'use strict';

var url = require('url');


var Processer = require('./ProcesserService');


module.exports.trainersTrainerKeyProcessersGet = function trainersTrainerKeyProcessersGet (req, res, next) {
  var trainerKey = req.swagger.params['trainerKey'].value;
  

  var result = Processer.trainersTrainerKeyProcessersGet(trainerKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.trainersTrainerKeyProcessersPut = function trainersTrainerKeyProcessersPut (req, res, next) {
  var trainerKey = req.swagger.params['trainerKey'].value;
  var body = req.swagger.params['body'].value;
  

  var result = Processer.trainersTrainerKeyProcessersPut(trainerKey, body);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
