'use strict';

var url = require('url');


var Trainer = require('./TrainerService');


module.exports.trainersGet = function trainersGet (req, res, next) {
  var tags = req.swagger.params['tags'].value;
  var name = req.swagger.params['name'].value;
  var type = req.swagger.params['type'].value;
  var domain = req.swagger.params['domain'].value;
  var locale = req.swagger.params['locale'].value;
  var limit = req.swagger.params['limit'].value;
  var start = req.swagger.params['start'].value;
  var orderby = req.swagger.params['orderby'].value;
  

  var result = Trainer.trainersGet(tags, name, type, domain, locale, limit, start, orderby);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.trainersPost = function trainersPost (req, res, next) {
  var body = req.swagger.params['body'].value;
  

  var result = Trainer.trainersPost(body);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.trainersTrainerKeyGet = function trainersTrainerKeyGet (req, res, next) {
  var trainerKey = req.swagger.params['trainerKey'].value;
  

  var result = Trainer.trainersTrainerKeyGet(trainerKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.trainersTrainerKeyPut = function trainersTrainerKeyPut (req, res, next) {
  var trainerKey = req.swagger.params['trainerKey'].value;
  var body = req.swagger.params['body'].value;
  

  var result = Trainer.trainersTrainerKeyPut(trainerKey, body);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.trainersTrainerKeyDelete = function trainersTrainerKeyDelete (req, res, next) {
  var trainerKey = req.swagger.params['trainerKey'].value;
  

  var result = Trainer.trainersTrainerKeyDelete(trainerKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.trainersTrainerKeyBuildGet = function trainersTrainerKeyBuildGet (req, res, next) {
  var trainerKey = req.swagger.params['trainerKey'].value;
  

  var result = Trainer.trainersTrainerKeyBuildGet(trainerKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.trainersTrainerKeyInputGet = function trainersTrainerKeyInputGet (req, res, next) {
  var trainerKey = req.swagger.params['trainerKey'].value;
  

  var result = Trainer.trainersTrainerKeyInputGet(trainerKey);

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
  

  var result = Trainer.trainersTrainerKeyInputPut(trainerKey, body);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.trainersTrainerKeyProcessersGet = function trainersTrainerKeyProcessersGet (req, res, next) {
  var trainerKey = req.swagger.params['trainerKey'].value;
  

  var result = Trainer.trainersTrainerKeyProcessersGet(trainerKey);

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
  

  var result = Trainer.trainersTrainerKeyProcessersPut(trainerKey, body);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
