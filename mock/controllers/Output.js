'use strict';

var url = require('url');


var Output = require('./OutputService');


module.exports.svcsSvcKeyOutputGet = function svcsSvcKeyOutputGet (req, res, next) {
  var svcKey = req.swagger.params['svcKey'].value;
  

  var result = Output.svcsSvcKeyOutputGet(svcKey);

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
  

  var result = Output.svcsSvcKeyOutputPut(svcKey, body);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
