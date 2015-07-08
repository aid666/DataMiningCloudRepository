var express = require('express');
var router = express.Router();

var svcs = [
    {
      key: 1,
      name: "name 1"
    },
    {
      key: 2,
      name: "name 2"
    }
]

/* GET svcs listing. */
router.get('', function(req, res, next) {
  res.json(svcs);
});

/* POST svcs listing. */
router.post('', function(req, res, next) {
  var new_svc = JSON.parse(res.body);
  svcs.push(new_svc)
  res.json(new_svc);
});

/* GET svc details */
router.get('/:key', function(req, res, next){
  for (var i = 0; i < svcs.length; i++) {
    var svc = svcs[i];
    if(svc.key == res.params.key){
      res.json(svc);
      break;
    }

  }
});

module.exports = router;
