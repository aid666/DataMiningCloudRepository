var express = require('express');
var router = express.Router();

var archives = [
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
router.get('/svcs', function(req, res, next) {
  res.json(archives);
});

/* POST archive svcs listing. */
router.post('/svcs', function(req, res, next) {
  var req_archive = req.body;
  var new_archive = {
    key: new_archive.key + 3, //Should a key generator here
    name: new_archive.name
  }
  archives.push(new_archive)
  res.json(new_archive);
});

/* GET archive svc details */
router.get('/svcs/:key', function(req, res, next){
  for (var i = 0; i < archives.length; i++) {
    var archive = archives[i];
    if(archive.key == res.params.key){
      res.json(archive);
      break;
    }

  }
});

module.exports = router;
