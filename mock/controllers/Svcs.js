'use strict';

var url = require('url');


var Svcs = require('./SvcsService');


module.exports.svcsGet = function svcsGet (req, res, next) {
  var tags = req.swagger.params['tags'].value;
  var name = req.swagger.params['name'].value;
  var type = req.swagger.params['type'].value;
  var domain = req.swagger.params['domain'].value;
  var locale = req.swagger.params['locale'].value;
  var limit = req.swagger.params['limit'].value;
  var start = req.swagger.params['start'].value;
  var orderby = req.swagger.params['orderby'].value;
  

  var result = Svcs.svcsGet(tags, name, type, domain, locale, limit, start, orderby);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.svcsPost = function svcsPost (req, res, next) {
  var body = req.swagger.params['body'].value;
  

  var result = Svcs.svcsPost(body);

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

module.exports.svcsSvcKeyBuildGet = function svcsSvcKeyBuildGet (req, res, next) {
  var svcKey = req.swagger.params['svcKey'].value;
  

  var result = Svcs.svcsSvcKeyBuildGet(svcKey);

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
