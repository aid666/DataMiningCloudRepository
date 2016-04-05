var express = require('express');
var router = express.Router();
var shortid = require('shortid');

router.get('', function(req, res, next) {
  modelMetaDS.find(
    {
      owner: req.uid
    },
    function(err, docs){
      if(err){
        res.sendStatus(500);
      }else{
        res.json(docs);
      }
    })
});

router.post('', function(req, res, next) {
  console.log("create data for " + req.uid);
  var metadata = {
      "name": "Model",
      "domain": "Undefined",
      "locale": "Global"
  };
  /*
  if(req.body != null){
    var inData = JSON.parse(req.body);
    if(inData){
      metadata.name = inData.name;
      metadata.domain = inData.domain;
      metadata.locale = inData.locale;
    }
  }*/

  console.log(metadata);
  var key = shortid.generate();
  var touchDate = new Date().toISOString().substring(0, 19);
  var newData = {
    "_id": key,
    "owner": req.uid,
    "create": touchDate,
    "modified": touchDate,
    "metadata": metadata
  };
  console.log("prepare to insert " + newData);
  modelMetaDS.insert(
    newData,
    function(err, newDoc){
      if(err){
        res.sendStatus(400);
      }else{
        modelDS.insert({
          "_id": key,
          "owner": req.uid,
          "create": touchDate,
          "modified": touchDate,
          "content": {}
        });
        res.json(newData);
      }
    })
});

router.all('/:key/*', function(req, res, next) {
  modelMetaDS.find(
    {
      _id: req.params.key
    },
    function(err, docs){
      if(docs.length == 0){
        res.sendStatus(404);
      }
      else{
        req.dataObj = docs.shift();
        next();
      }
    })
});

router.get('/:key', function(req, res, next){
  res.json(req.dataObj);
});

router.put('/:key', function(req, res, next){
  var newData = JSON.parse(req.body.metadata);
  modelMetaDS.update(
    { _id: req.dataObj._id},
    {
      $set: {
        "metadata": newData,
        "modified": new Date().toISOString().substring(0, 19)
      }
    },
    {},
    function(err, numReplaced){
      if(err == null && numReplaced == 1){
        res.sendStatus(204);
      }else{
        res.sendStatus(500);
      }
    });
});

router.delete('/:key', function(req, res, next){
  modelMetaDS.remove({_id: req.dataObj._id})
  modelDS.remove({_id: req.dataObj._id})
  res.sendStatus(204);
});

router.get('/:key/content', function(req, res, next){
  modelDS.find(
    {
      _id: req.params.key
    },
    function(err, docs){
      if(docs.length == 0){
        res.json({});
      }else{
        res.json(docs.shift());
      }
    })
});

router.put('/:key/content', function(req, res, next){
  var newData = JSON.parse(req.body.cotent);
  modelDS.update(
    { _id: req.dataObj._id},
    {
      $set: {
        "content": newData,
        "modified": new Date().toISOString().substring(0, 19)
      }
    },
    {},
    function(err, numReplaced){
      if(err == null && numReplaced == 1){
        res.sendStatus(204);
      }else{
        res.sendStatus(500);
      }
    });
});

module.exports = router;
