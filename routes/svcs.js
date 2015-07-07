var express = require('express');
var router = express.Router();

var services = [
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
  res.json(services);
});

module.exports = router;
