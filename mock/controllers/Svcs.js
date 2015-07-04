'use strict';

var url = require('url');


var Svcs = require('./SvcsService');


module.exports.searchDMSvc = function searchDMSvc (req, res, next) {
  

  var result = Svcs.searchDMSvc();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.svcsSvcKeyGet = function svcsSvcKeyGet (req, res, next) {
  var svcKey = req.swagger.params['svcKey'].value;
  

  var result = Svcs.svcsSvcKeyGet(svcKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.svcsSvcKeyPut = function svcsSvcKeyPut (req, res, next) {
  var svcKey = req.swagger.params['svcKey'].value;
  var body = req.swagger.params['body'].value;
  

  var result = Svcs.svcsSvcKeyPut(svcKey, body);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.svcsSvcKeyDelete = function svcsSvcKeyDelete (req, res, next) {
  var svcKey = req.swagger.params['svcKey'].value;
  

  var result = Svcs.svcsSvcKeyDelete(svcKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.svcsSvcKeyInputGet = function svcsSvcKeyInputGet (req, res, next) {
  var svcKey = req.swagger.params['svcKey'].value;
  

  var result = Svcs.svcsSvcKeyInputGet(svcKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.svcsSvcKeyInputPut = function svcsSvcKeyInputPut (req, res, next) {
  var svcKey = req.swagger.params['svcKey'].value;
  var body = req.swagger.params['body'].value;
  

  var result = Svcs.svcsSvcKeyInputPut(svcKey, body);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.svcsSvcKeyOutputGet = function svcsSvcKeyOutputGet (req, res, next) {
  var svcKey = req.swagger.params['svcKey'].value;
  

  var result = Svcs.svcsSvcKeyOutputGet(svcKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.svcsSvcKeyOutputPut = function svcsSvcKeyOutputPut (req, res, next) {
  var svcKey = req.swagger.params['svcKey'].value;
  var body = req.swagger.params['body'].value;
  

  var result = Svcs.svcsSvcKeyOutputPut(svcKey, body);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.svcsSvcKeyProcessersGet = function svcsSvcKeyProcessersGet (req, res, next) {
  var svcKey = req.swagger.params['svcKey'].value;
  

  var result = Svcs.svcsSvcKeyProcessersGet(svcKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.svcsSvcKeyProcessersPut = function svcsSvcKeyProcessersPut (req, res, next) {
  var svcKey = req.swagger.params['svcKey'].value;
  var body = req.swagger.params['body'].value;
  

  var result = Svcs.svcsSvcKeyProcessersPut(svcKey, body);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
