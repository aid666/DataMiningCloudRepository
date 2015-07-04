'use strict';

var url = require('url');


var Default = require('./DefaultService');


module.exports.archivesModelGet = function archivesModelGet (req, res, next) {
  

  var result = Default.archivesModelGet();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.archivesModelPost = function archivesModelPost (req, res, next) {
  var body = req.swagger.params['body'].value;
  

  var result = Default.archivesModelPost(body);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.archivesModelArchiveKeyGet = function archivesModelArchiveKeyGet (req, res, next) {
  var archiveKey = req.swagger.params['archiveKey'].value;
  

  var result = Default.archivesModelArchiveKeyGet(archiveKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.archivesModelArchiveKeyDelete = function archivesModelArchiveKeyDelete (req, res, next) {
  var archiveKey = req.swagger.params['archiveKey'].value;
  

  var result = Default.archivesModelArchiveKeyDelete(archiveKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.archivesSvcsGet = function archivesSvcsGet (req, res, next) {
  

  var result = Default.archivesSvcsGet();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.archivesSvcsPost = function archivesSvcsPost (req, res, next) {
  var body = req.swagger.params['body'].value;
  

  var result = Default.archivesSvcsPost(body);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.archivesSvcsArchiveKeyGet = function archivesSvcsArchiveKeyGet (req, res, next) {
  var archiveKey = req.swagger.params['archiveKey'].value;
  

  var result = Default.archivesSvcsArchiveKeyGet(archiveKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.archivesSvcsArchiveKeyDelete = function archivesSvcsArchiveKeyDelete (req, res, next) {
  var archiveKey = req.swagger.params['archiveKey'].value;
  

  var result = Default.archivesSvcsArchiveKeyDelete(archiveKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.archivesTrainerGet = function archivesTrainerGet (req, res, next) {
  

  var result = Default.archivesTrainerGet();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.archivesTrainerPost = function archivesTrainerPost (req, res, next) {
  var body = req.swagger.params['body'].value;
  

  var result = Default.archivesTrainerPost(body);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.archivesTrainerArchiveKeyGet = function archivesTrainerArchiveKeyGet (req, res, next) {
  var archiveKey = req.swagger.params['archiveKey'].value;
  

  var result = Default.archivesTrainerArchiveKeyGet(archiveKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.archivesTrainerArchiveKeyDelete = function archivesTrainerArchiveKeyDelete (req, res, next) {
  var archiveKey = req.swagger.params['archiveKey'].value;
  

  var result = Default.archivesTrainerArchiveKeyDelete(archiveKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.searchModel = function searchModel (req, res, next) {
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
  

  var result = Default.searchModel(tags, name, type, domain, locale, trainerType, referenceCountLowLimit, limit, start, orderby);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.addSvc = function addSvc (req, res, next) {
  var body = req.swagger.params['body'].value;
  

  var result = Default.addSvc(body);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.modelsModelKeyDelete = function modelsModelKeyDelete (req, res, next) {
  var modelKey = req.swagger.params['modelKey'].value;
  

  var result = Default.modelsModelKeyDelete(modelKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.modelsModelKeyBuildGet = function modelsModelKeyBuildGet (req, res, next) {
  var modelKey = req.swagger.params['modelKey'].value;
  

  var result = Default.modelsModelKeyBuildGet(modelKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.modelsModelKeyDataGet = function modelsModelKeyDataGet (req, res, next) {
  var modelKey = req.swagger.params['modelKey'].value;
  

  var result = Default.modelsModelKeyDataGet(modelKey);

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
  

  var result = Default.modelsModelKeyDataPut(modelKey, body);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.modelsModelKeyUpdatesGet = function modelsModelKeyUpdatesGet (req, res, next) {
  var modelKey = req.swagger.params['modelKey'].value;
  

  var result = Default.modelsModelKeyUpdatesGet(modelKey);

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
  

  var result = Default.modelsModelKeyUpdatesPost(modelKey, body);

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
  

  var result = Default.modelsModelKeyUpdatesUpdateKeyGet(modelKey, updateKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.addSvc_1 = function addSvc_1 (req, res, next) {
  var body = req.swagger.params['body'].value;
  

  var result = Default.addSvc_1(body);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.searchTrainer = function searchTrainer (req, res, next) {
  var tags = req.swagger.params['tags'].value;
  var name = req.swagger.params['name'].value;
  var type = req.swagger.params['type'].value;
  var domain = req.swagger.params['domain'].value;
  var locale = req.swagger.params['locale'].value;
  var limit = req.swagger.params['limit'].value;
  var start = req.swagger.params['start'].value;
  var orderby = req.swagger.params['orderby'].value;
  

  var result = Default.searchTrainer(tags, name, type, domain, locale, limit, start, orderby);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
