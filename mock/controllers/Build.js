'use strict';

var url = require('url');


var Build = require('./BuildService');


module.exports.svcsSvcKeyBuildGet = function svcsSvcKeyBuildGet (req, res, next) {
  var svcKey = req.swagger.params['svcKey'].value;
  

  var result = Build.svcsSvcKeyBuildGet(svcKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.trainersTrainerKeyBuildGet = function trainersTrainerKeyBuildGet (req, res, next) {
  var trainerKey = req.swagger.params['trainerKey'].value;
  

  var result = Build.trainersTrainerKeyBuildGet(trainerKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
