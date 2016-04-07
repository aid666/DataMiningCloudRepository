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
        res.json({
          "items": docs
        });
      }
    })
});

function formatInput(inputData, inputErrorCallback){
    var metadata = {
        "name": "Model",
        "domain": "Undefined",
        "locale": "Global"
    };
    try{
      if(inputData){
        var newData = inputData.metadata;
        if(typeof newData == 'string'){
          newData = JSON.parse(inputData.metadata);
        }
        metadata.name = newData.name;
        metadata.domain = newData.domain;
        metadata.locale = newData.locale;
      }
    }catch(exception){
      console.log(exception);
        if(typeof inputErrorCallback == 'function'){
            inputErrorCallback(exception);
        }
    }
    return metadata;
}

router.post('', function(req, res, next) {
  var metadata = formatInput(req.body);
  var key = shortid.generate();
  var touchDate = new Date().toISOString().substring(0, 19);
  var newData = {
    "_id": key,
    "owner": req.uid,
    "create": touchDate,
    "modified": touchDate,
    "metadata": metadata
  };
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

router.all('/:key', function(req, res, next){
  modelMetaDS.find(
  {
    _id: req.params.key
  },
  function(err, docs){
    if(docs.length == 0){
      res.sendStatus(404);
    }else{
      var dataObj = docs.shift();
      req.dataObj = dataObj;
      next();
    }
  });
});

router.get('/:key', function(req, res, next){
  res.json(req.dataObj);
});

router.put('/:key', function(req, res, next){
  var requestError = null;
  console.log("PUT " + JSON.stringify(req.body));
  var newData = formatInput(req.body, function(err){
    requestError = err;
  });
  if(requestError){
    res.sendStatus(400, JSON.stringify(requestError));
  }else{
    console.log("Update " + JSON.stringify(newData));
    modelMetaDS.update(
      { _id: req.params.key},
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
  }
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
    var newData = null;
    console.log(req.body);
    try{
        if(req.body && req.body.content){
            newData = JSON.parse(req.body.content);
        }
    }catch(exception){
        res.sendStatus(400, exception);
    }
    console.log(newData);
    if(newData){
        modelDS.update(
          { _id: req.params.key},
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
    }else{
      res.sendStatus(400);
    }
});

module.exports = router;
