var express = require('express');
var router = express.Router();

var trainers = [
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

/* GET trainers listing. */
router.get('', function(req, res, next) {
  res.json(trainers);
});

/* POST trainers listing. */
router.post('', function(req, res, next) {
  var req_trainer = req.body;
  var new_trainer = {
    key: new_trainer.key + 3, //Should a key generator here
    name: new_trainer.name
  }
  trainers.push(new_trainer)
  res.json(new_trainer);
});

/* GET trainer details */
router.get('/:key', function(req, res, next){
  for (var i = 0; i < trainers.length; i++) {
    var trainer = trainers[i];
    if(trainer.key == res.params.key){
      res.json(trainer);
      break;
    }

  }
});

module.exports = router;
