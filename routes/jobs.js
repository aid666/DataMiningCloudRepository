var express = require('express');
var router = express.Router();

var jobs = [
    {
      key: 1,
      name: "name 1",
      processers: [
        {
          key: 1,
          algKey: "scheme",
          domain: {
            name: "domain 1"
          },
        }
      ]
    }
]

var jobProcessers = {
  1 : [
    {
      key: 1,
      algrithm: "scheme",
      modelRef: "demoModelRef"
    },

  ],
}

/* GET jobs listing. */
router.get('', function(req, res, next) {
  res.json(jobs);
});

/* POST jobs listing. */
router.post('', function(req, res, next) {
  var req_job = req.body;
  var new_job = {
    key: new_job.key + 3, //Should a key generator here
    name: new_job.name
  }
  jobs.push(new_job)
  res.json(new_job);
});

/* GET job metadata */
router.get('/:key', function(req, res, next){
  for (var i = 0; i < jobs.length; i++) {
    var job = jobs[i];
    if(job.key == req.params.key){
      res.json(job);
      break;
    }
  }
  next();
});

//Update job metadata
router.put('/:key', function(req, res, next){
    var req_job = req.body;
    for (var i = 0; i < jobs.length; i++) {
      var job = jobs[i];
      if(job.key == req.params.key){
        jobs.splice(i, 1);
        jobs.push(req_job);
        res.json(job);
        break;
      }
    }
    next();
});

//Update job metadata
router.delete('/:key', function(req, res, next){
    var req_job = req.body;
    for (var i = 0; i < jobs.length; i++) {
      var job = jobs[i];
      if(job.key == req.params.key){
        jobs.splice(i, 1);
        res.sendStatus(204);
        break;
      }
    }
    next();
});

/* GET job processers */
router.get('/:key/processers', function(req, res, next){
    var processers = jobProcessers[req.params.key];
    if(processers != null){
      res.json(processers);
    }
});

/* PUT job metadata */
router.put('/:key/processers', function(req, res, next){
    var req_processers = req.body;
    jobProcessers[req.params.key] = req_processers;
    res.json(req_processers);
});

/* POST job metadata */
router.post('/:key/build', function(req, res, next){
    res.json({
      key: 1,
      date: new Date()
    });
});

module.exports = router;
