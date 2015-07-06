'use strict';

var url = require('url');


var Model = require('./ModelService');


module.exports.modelsGet = function modelsGet (req, res, next) {
  var tags = req.swagger.params['tags'].value;
  var name = req.swagger.params['name'].value;
  var type = req.swagger.params['type'].value;
  var domain = req.swagger.params['domain'].value;
  var locale = req.swagger.params['locale'].value;
  var trainerType = req.swagger.params['trainerType'].value;
  var referenceCountLowLimit = req.swagger.params['referenceCountLowLimit'].value;
  var limit = req.swagger.params['limit'].value;
  var start = req.swagger.params['start'].value;
  var orderby = req.swagger.params['orderby'].value;
  

  var result = Model.modelsGet(tags, name, type, domain, locale, trainerType, referenceCountLowLimit, limit, start, orderby);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.modelsPost = function modelsPost (req, res, next) {
  var body = req.swagger.params['body'].value;
  

  var result = Model.modelsPost(body);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.modelsModelKeyGet = function modelsModelKeyGet (req, res, next) {
  var modelKey = req.swagger.params['modelKey'].value;
  

  var result = Model.modelsModelKeyGet(modelKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.modelsModelKeyPut = function modelsModelKeyPut (req, res, next) {
  var modelKey = req.swagger.params['modelKey'].value;
  var body = req.swagger.params['body'].value;
  

  var result = Model.modelsModelKeyPut(modelKey, body);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.modelsModelKeyDelete = function modelsModelKeyDelete (req, res, next) {
  var modelKey = req.swagger.params['modelKey'].value;
  

  var result = Model.modelsModelKeyDelete(modelKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.modelsModelKeyBuildGet = function modelsModelKeyBuildGet (req, res, next) {
  var modelKey = req.swagger.params['modelKey'].value;
  

  var result = Model.modelsModelKeyBuildGet(modelKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.modelsModelKeyDataGet = function modelsModelKeyDataGet (req, res, next) {
  var modelKey = req.swagger.params['modelKey'].value;
  

  var result = Model.modelsModelKeyDataGet(modelKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.modelsModelKeyDataPut = function modelsModelKeyDataPut (req, res, next) {
  var modelKey = req.swagger.params['modelKey'].value;
  var body = req.swagger.params['body'].value;
  

  var result = Model.modelsModelKeyDataPut(modelKey, body);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.modelsModelKeyUpdatesGet = function modelsModelKeyUpdatesGet (req, res, next) {
  var modelKey = req.swagger.params['modelKey'].value;
  

  var result = Model.modelsModelKeyUpdatesGet(modelKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.modelsModelKeyUpdatesPost = function modelsModelKeyUpdatesPost (req, res, next) {
  var modelKey = req.swagger.params['modelKey'].value;
  var body = req.swagger.params['body'].value;
  

  var result = Model.modelsModelKeyUpdatesPost(modelKey, body);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.modelsModelKeyUpdatesUpdateKeyGet = function modelsModelKeyUpdatesUpdateKeyGet (req, res, next) {
  var modelKey = req.swagger.params['modelKey'].value;
  var updateKey = req.swagger.params['updateKey'].value;
  

  var result = Model.modelsModelKeyUpdatesUpdateKeyGet(modelKey, updateKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
