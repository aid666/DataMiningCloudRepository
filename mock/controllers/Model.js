'use strict';

var url = require('url');


var Model = require('./ModelService');


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
