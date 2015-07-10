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

/* GET model data */
router.get('/:key/data', function(req, res, next){
  var data = modelDatas[req.params.key];
  if(data){
    res.json(data)
  }
  else {
    res.sendStatus(404);
  }

});

/* Updaet model data*/
router.put('/:key/data', function(req, res, next){
  var data = modelDatas[req.params.key];
  if(data){
    modelDatas[req.params.key] = res.body;
    res.json(res.body)
  }
  else {
    res.sendStatus(404);
  }

});

module.exports = router;
