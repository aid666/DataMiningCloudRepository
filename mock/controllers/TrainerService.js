'use strict';

exports.trainersGet = function(tags, name, type, domain, locale, limit, start, orderby) {

  var examples = {};
  
  examples['application/json'] = [ {
  "owner" : "aeiou",
  "catalog" : "aeiou",
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
exports.trainersPost = function(body) {

  var examples = {};
  
  examples['application/json'] = {
  "owner" : "aeiou",
  "catalog" : "aeiou",
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
exports.trainersTrainerKeyGet = function(trainerKey) {

  var examples = {};
  
  examples['application/json'] = {
  "owner" : "aeiou",
  "catalog" : "aeiou",
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
exports.trainersTrainerKeyPut = function(trainerKey, body) {

  var examples = {};
  
  examples['application/json'] = {
  "owner" : "aeiou",
  "catalog" : "aeiou",
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
exports.trainersTrainerKeyDelete = function(trainerKey) {

  var examples = {};
  

  
}
exports.trainersTrainerKeyBuildGet = function(trainerKey) {

  var examples = {};
  
  examples['application/json'] = {
  "key" : "aeiou",
  "status" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.trainersTrainerKeyInputGet = function(trainerKey) {

  var examples = {};
  
  examples['application/json'] = {
  "attributes" : [ {
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
  } ]
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.trainersTrainerKeyInputPut = function(trainerKey, body) {

  var examples = {};
  
  examples['application/json'] = {
  "attributes" : [ {
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
  } ]
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.trainersTrainerKeyProcessersGet = function(trainerKey) {

  var examples = {};
  
  examples['application/json'] = [ {
  "modelRef" : {
    "accessCode" : "aeiou",
    "refType" : "aeiou",
    "refResource" : "aeiou",
    "refKey" : "aeiou"
  },
  "algrithm" : {
    "catalog" : "aeiou",
    "name" : "aeiou",
    "description" : "aeiou",
    "key" : "aeiou",
    "tags" : [ "aeiou" ]
  }
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.trainersTrainerKeyProcessersPut = function(trainerKey, body) {

  var examples = {};
  
  examples['application/json'] = [ {
  "modelRef" : {
    "accessCode" : "aeiou",
    "refType" : "aeiou",
    "refResource" : "aeiou",
    "refKey" : "aeiou"
  },
  "algrithm" : {
    "catalog" : "aeiou",
    "name" : "aeiou",
    "description" : "aeiou",
    "key" : "aeiou",
    "tags" : [ "aeiou" ]
  }
} ];
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
