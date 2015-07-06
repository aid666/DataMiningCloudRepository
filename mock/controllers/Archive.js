'use strict';

var url = require('url');


var Archive = require('./ArchiveService');


module.exports.archivesModelGet = function archivesModelGet (req, res, next) {
  

  var result = Archive.archivesModelGet();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.archivesModelPost = function archivesModelPost (req, res, next) {
  var body = req.swagger.params['body'].value;
  

  var result = Archive.archivesModelPost(body);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.archivesModelArchiveKeyGet = function archivesModelArchiveKeyGet (req, res, next) {
  var archiveKey = req.swagger.params['archiveKey'].value;
  

  var result = Archive.archivesModelArchiveKeyGet(archiveKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.archivesModelArchiveKeyDelete = function archivesModelArchiveKeyDelete (req, res, next) {
  var archiveKey = req.swagger.params['archiveKey'].value;
  

  var result = Archive.archivesModelArchiveKeyDelete(archiveKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.archivesSvcsGet = function archivesSvcsGet (req, res, next) {
  

  var result = Archive.archivesSvcsGet();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.archivesSvcsPost = function archivesSvcsPost (req, res, next) {
  var body = req.swagger.params['body'].value;
  

  var result = Archive.archivesSvcsPost(body);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.archivesSvcsArchiveKeyGet = function archivesSvcsArchiveKeyGet (req, res, next) {
  var archiveKey = req.swagger.params['archiveKey'].value;
  

  var result = Archive.archivesSvcsArchiveKeyGet(archiveKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.archivesSvcsArchiveKeyDelete = function archivesSvcsArchiveKeyDelete (req, res, next) {
  var archiveKey = req.swagger.params['archiveKey'].value;
  

  var result = Archive.archivesSvcsArchiveKeyDelete(archiveKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.archivesTrainerGet = function archivesTrainerGet (req, res, next) {
  

  var result = Archive.archivesTrainerGet();

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.archivesTrainerPost = function archivesTrainerPost (req, res, next) {
  var body = req.swagger.params['body'].value;
  

  var result = Archive.archivesTrainerPost(body);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.archivesTrainerArchiveKeyGet = function archivesTrainerArchiveKeyGet (req, res, next) {
  var archiveKey = req.swagger.params['archiveKey'].value;
  

  var result = Archive.archivesTrainerArchiveKeyGet(archiveKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};

module.exports.archivesTrainerArchiveKeyDelete = function archivesTrainerArchiveKeyDelete (req, res, next) {
  var archiveKey = req.swagger.params['archiveKey'].value;
  

  var result = Archive.archivesTrainerArchiveKeyDelete(archiveKey);

  if(typeof result !== 'undefined') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result || {}, null, 2));
  }
  else
    res.end();
};
