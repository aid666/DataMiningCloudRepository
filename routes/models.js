var express = require('express');
var router = express.Router();

var models = [
    {
      key: 1,
      name: "name 1",
      data: [
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

var modelDatas = {
  1: {
    key: 2,
    datas: "demo data"
  }
}

var modelBuilds = {
  1: [
      {
        key: 2,
        datas: "demo data 2"
      },
      {
        key: 3,
        datas: "demo data 3"
      }
    ]
}

/* GET models listing. */
router.get('', function(req, res, next) {
  res.json(models);
});

/* POST models listing. */
router.post('', function(req, res, next) {
  var req_model = req.body;
  var new_model = {
    key: req_model.key + 3, //Should a key generator here
    name: req_model.name
  }
  models.push(new_model)
  res.json(new_model);
});

/* GET model details */
router.get('/:key', function(req, res, next){
  for (var i = 0; i < models.length; i++) {
    var model = models[i];
    if(model.key == req.params.key){
      res.json(model);
      break;
    }
  }
});

/* Deleta model */
router.delete('/:key', function(req, res, next){
  for (var i = 0; i < models.length; i++) {
    var model = models[i];
    if(model.key == req.params.key){
      models.splice(i, 1);
      res.sendStatus(204);
      break;
    }
  }
});

/* Update model */
router.put('/:key', function(req, res, next){
  for (var i = 0; i < models.length; i++) {
    var model = models[i];
    if(model.key == req.params.key){
      models.splice(i, 1);
      models.push(req.body);
      break;
    }
  }
});

/* GET model builds */
router.get('/:key/builds', function(req, res, next){
  var builds = modelBuilds[req.params.key];
  if(builds){
    res.json(builds)
  }
  else {
    res.sendStatus(404);
  }

});

/* POST model builds*/
router.post('/:key/builds', function(req, res, next){
  var builds = modelBuilds[req.params.key];
  if(builds){
    builds.push(req.body);
    res.json(req.body)
  }
  else {
    res.sendStatus(404);
  }

});

/* GET model build  */
router.get('/:key/builds/:buildKey', function(req, res, next){
  var builds = modelBuilds[req.params.key];
  if(builds){
    for (var i = 0; i < builds.length; i++) {
      var build = builds[i];
      if(build.key == req.params.buildKey){
        res.json(build)
        break;
      }
    }
  }
  else {
    res.sendStatus(404);
  }

});

/* delete model build*/
router.delete('/:key/builds/:buildKey', function(req, res, next){
  var builds = modelBuilds[req.params.key];
  if(builds){
    for (var i = 0; i < builds.length; i++) {
      var build = builds[i];
      if(model.key == req.params.buildKey){
        builds.splice(i, 1);
        res.sendStatus(204);
        break;
      }
    }
  }
  else {
    res.sendStatus(404);
  }

});

module.exports = router;
