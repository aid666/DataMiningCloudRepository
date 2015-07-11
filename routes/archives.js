var express = require('express');
var router = express.Router();

var svcArchives = [
    {
      key: 1,
      name: "name 1",
      processer: [
        {
          key: 1,
          type: "classifier",
          domain: {
            name: "domain 1"
          },
        }
      ]
    }
]

/* GET archive svcs listing. */
router.get('/svc', function(req, res, next) {
  res.json(svcArchives);
});

/* POST archive svcs listing. */
router.post('/svc', function(req, res, next) {
  var req_archive = req.body;
  var new_archive = {
    key: req_archive.key + 3, //Should a key generator here
    name: req_archive.name
  }
  svcArchives.push(new_archive)
  res.json(new_archive);
});

/* GET archive svc details */
router.get('/svc/:key', function(req, res, next){
  for (var i = 0; i < svcArchives.length; i++) {
    var archive = svcArchives[i];
    if(archive.key == res.params.key){
      res.json(archive);
      break;
    }
  }
});

/* DELETE archive svc details */
router.delete('/svc/:key', function(req, res, next){
  for (var i = 0; i < svcArchives.length; i++) {
    var archive = svcArchives[i];
    if(archive.key == res.params.key){
      svcArchives.splice(i, 1);
      res.sendStatus(204);
      break;
    }
  }
});


var modelArchives = [
    {
      key: 1,
      name: "name 1",
    }
]

/* GET archive models listing. */
router.get('/model', function(req, res, next) {
  res.json(modelArchives);
});

/* POST archive models listing. */
router.post('/model', function(req, res, next) {
  var req_archive = req.body;
  var new_archive = {
    key: new_archive.key + 3, //Should a key generator here
    name: new_archive.name
  }
  modelArchives.push(new_archive)
  res.json(new_archive);
});

/* GET archive model details */
router.get('/model/:key', function(req, res, next){
  for (var i = 0; i < modelArchives.length; i++) {
    var archive = modelArchives[i];
    if(archive.key == res.params.key){
      res.json(archive);
      break;
    }
  }
});

/* DELETE archive model details */
router.delete('/model/:key', function(req, res, next){
  for (var i = 0; i < modelArchives.length; i++) {
    var archive = modelArchives[i];
    if(archive.key == res.params.key){
      modelArchives.splice(i, 1);
      res.sendStatus(204);
      break;
    }
  }
});

module.exports = router;
