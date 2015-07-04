'use strict';

var url = require('url');


var Input = require('./InputService');


module.exports.svcsSvcKeyInputPut = function svcsSvcKeyInputPut (req, res, next) {
  var svcKey = req.swagger.params['svcKey'].value;
  var body = req.swagger.params['body'].value;
  

  var result = Input.svcsSvcKeyInputPut(svcKey, body);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.trainersTrainerKeyInputGet = function trainersTrainerKeyInputGet (req, res, next) {
  var trainerKey = req.swagger.params['trainerKey'].value;
  

  var result = Input.trainersTrainerKeyInputGet(trainerKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.trainersTrainerKeyInputPut = function trainersTrainerKeyInputPut (req, res, next) {
  var trainerKey = req.swagger.params['trainerKey'].value;
  var body = req.swagger.params['body'].value;
  

  var result = Input.trainersTrainerKeyInputPut(trainerKey, body);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
