var express = require('express');
var router = express.Router();

var svcs = [
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

var svcProcessers = {
  1 : [
    {
      key: 1,
      algrithm: "demoAlg",
      modelRef: "demoModelRef"
    },

  ],
}

/* GET svcs listing. */
router.get('', function(req, res, next) {
  res.json(svcs);
});

/* POST svcs listing. */
router.post('', function(req, res, next) {
  var req_svc = req.body;
  var new_svc = {
    key: new_svc.key + 3, //Should a key generator here
    name: new_svc.name
  }
  svcs.push(new_svc)
  res.json(new_svc);
});

/* GET svc metadata */
router.get('/key', function(req, res, next){
  console.log(req);
  for (var i = 0; i < svcs.length; i++) {
    var svc = svcs[i];
    if(svc.key == res.path.key){
      res.json(svc);
      break;
    }
  }
});

/* GET svc metadata */
router.get('/:key/processers', function(req, res, next){
    var processers = svcProcessers[res.path.key];
    if(processers != null){
      res.json(processers);
    }

    res.josn({});
});

module.exports = router;
