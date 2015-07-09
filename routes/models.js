var express = require('express');
var router = express.Router();

var models = [
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

/* GET models listing. */
router.get('', function(req, res, next) {
  res.json(models);
});

/* POST models listing. */
router.post('', function(req, res, next) {
  var req_model = req.body;
  var new_model = {
    key: new_model.key + 3, //Should a key generator here
    name: new_model.name
  }
  models.push(new_model)
  res.json(new_model);
});

/* GET model details */
router.get('/:key', function(req, res, next){
  for (var i = 0; i < models.length; i++) {
    var model = models[i];
    if(model.key == res.params.key){
      res.json(model);
      break;
    }

  }
});

module.exports = router;
