'use strict';

exports.modelsGet = function(tags, name, type, domain, locale, trainerType, referenceCountLowLimit, limit, start, orderby) {

  var examples = {};
  
  examples['application/json'] = [ {
  "owner" : "aeiou",
  "domain" : {
    "date" : "aeiou",
    "name" : "aeiou",
    "parentDomain" : ""
  },
  "name" : "aeiou",
  "description" : "aeiou",
  "isPublic" : true,
  "type" : "aeiou",
  "key" : "aeiou",
  "tags" : [ "aeiou" ]
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.modelsPost = function(body) {

  var examples = {};
  
  examples['application/json'] = {
  "owner" : "aeiou",
  "domain" : {
    "date" : "aeiou",
    "name" : "aeiou",
    "parentDomain" : ""
  },
  "name" : "aeiou",
  "description" : "aeiou",
  "isPublic" : true,
  "type" : "aeiou",
  "key" : "aeiou",
  "tags" : [ "aeiou" ]
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.modelsModelKeyGet = function(modelKey) {

  var examples = {};
  
  examples['application/json'] = {
  "owner" : "aeiou",
  "domain" : {
    "date" : "aeiou",
    "name" : "aeiou",
    "parentDomain" : ""
  },
  "name" : "aeiou",
  "description" : "aeiou",
  "isPublic" : true,
  "type" : "aeiou",
  "key" : "aeiou",
  "tags" : [ "aeiou" ]
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.modelsModelKeyPut = function(modelKey, body) {

  var examples = {};
  
  examples['application/json'] = {
  "owner" : "aeiou",
  "domain" : {
    "date" : "aeiou",
    "name" : "aeiou",
    "parentDomain" : ""
  },
  "name" : "aeiou",
  "description" : "aeiou",
  "isPublic" : true,
  "type" : "aeiou",
  "key" : "aeiou",
  "tags" : [ "aeiou" ]
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.modelsModelKeyDelete = function(modelKey) {

  var examples = {};
  

  
}
exports.modelsModelKeyBuildGet = function(modelKey) {

  var examples = {};
  
  examples['application/json'] = {
  "metadata" : {
    "owner" : "aeiou",
    "domain" : {
      "date" : "aeiou",
      "name" : "aeiou",
      "parentDomain" : ""
    },
    "name" : "aeiou",
    "description" : "aeiou",
    "isPublic" : true,
    "type" : "aeiou",
    "key" : "aeiou",
    "tags" : [ "aeiou" ]
  },
  "trainSet" : {
    "data" : [ {
      "data" : [ "aeiou" ],
      "attribute" : {
        "dataInfor" : {
          "domain" : "",
          "name" : "aeiou"
        },
        "name" : "aeiou",
        "format" : "aeiou",
        "type" : "aeiou"
      }
    } ],
    "key" : "aeiou"
  },
  "trainer" : {
    "accessCode" : "aeiou",
    "refType" : "aeiou",
    "refResource" : "aeiou",
    "refKey" : "aeiou"
  }
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.modelsModelKeyDataGet = function(modelKey) {

  var examples = {};
  
  examples['application/json'] = {
  "data" : {
    "data" : [ {
      "data" : [ "aeiou" ],
      "attribute" : {
        "dataInfor" : {
          "domain" : {
            "date" : "aeiou",
            "name" : "aeiou",
            "parentDomain" : ""
          },
          "name" : "aeiou"
        },
        "name" : "aeiou",
        "format" : "aeiou",
        "type" : "aeiou"
      }
    } ],
    "key" : "aeiou"
  },
  "name" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.modelsModelKeyDataPut = function(modelKey, body) {

  var examples = {};
  
  examples['application/json'] = {
  "data" : {
    "data" : [ {
      "data" : [ "aeiou" ],
      "attribute" : {
        "dataInfor" : {
          "domain" : {
            "date" : "aeiou",
            "name" : "aeiou",
            "parentDomain" : ""
          },
          "name" : "aeiou"
        },
        "name" : "aeiou",
        "format" : "aeiou",
        "type" : "aeiou"
      }
    } ],
    "key" : "aeiou"
  },
  "name" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.modelsModelKeyUpdatesGet = function(modelKey) {

  var examples = {};
  
  examples['application/json'] = [ {
  "key" : "aeiou"
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.modelsModelKeyUpdatesPost = function(modelKey, body) {

  var examples = {};
  
  examples['application/json'] = {
  "key" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.modelsModelKeyUpdatesUpdateKeyGet = function(modelKey, updateKey) {

  var examples = {};
  
  examples['application/json'] = {
  "key" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
