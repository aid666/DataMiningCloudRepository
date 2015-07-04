'use strict';

var url = require('url');


var Svc = require('./SvcService');


module.exports.svcsSvcKeyBuildGet = function svcsSvcKeyBuildGet (req, res, next) {
  var svcKey = req.swagger.params['svcKey'].value;
  

  var result = Svc.svcsSvcKeyBuildGet(svcKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
