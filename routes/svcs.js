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
router.get('/:key', function(req, res, next){
  for (var i = 0; i < svcs.length; i++) {
    var svc = svcs[i];
    if(svc.key == req.params.key){
      res.json(svc);
      break;
    }
  }
  next();
});

//Update svc metadata
router.put('/:key', function(req, res, next){
    var req_svc = req.body;
    for (var i = 0; i < svcs.length; i++) {
      var svc = svcs[i];
      if(svc.key == req.params.key){
        res.json(svc);
        break;
      }
    }
    next();
});

//Update svc metadata
router.delete('/:key', function(req, res, next){
    var req_svc = req.body;
    for (var i = 0; i < svcs.length; i++) {
      var svc = svcs[i];
      if(svc.key == req.params.key){
        svcs.removeAt(i);
        break;
      }
    }
    next();
});

/* GET svc processers */
router.get('/:key/processers', function(req, res, next){
    var processers = svcProcessers[req.params.key];
    if(processers != null){
      res.json(processers);
    }
});

/* PUT svc metadata */
router.put('/:key/processers', function(req, res, next){
    var req_processers = req.body;
    svcProcessers[req.params.key] = req_processers;
    res.json(req_processers);
});

/* POST svc metadata */
router.post('/:key/build', function(req, res, next){
    res.json({
      key: 1,
      date: new Date()
    });
});

module.exports = router;
