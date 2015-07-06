'use strict';

exports.svcsGet = function(tags, name, type, domain, locale, limit, start, orderby) {

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
exports.svcsPost = function(body) {

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
exports.svcsSvcKeyGet = function(svcKey) {

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
exports.svcsSvcKeyPut = function(svcKey, body) {

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
exports.svcsSvcKeyDelete = function(svcKey) {

  var examples = {};
  

  
}
exports.svcsSvcKeyBuildGet = function(svcKey) {

  var examples = {};
  
  examples['application/json'] = {
  "key" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.svcsSvcKeyInputGet = function(svcKey) {

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
exports.svcsSvcKeyInputPut = function(svcKey, body) {

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
exports.svcsSvcKeyOutputGet = function(svcKey) {

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
  } ],
  "type" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.svcsSvcKeyOutputPut = function(svcKey, body) {

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
  } ],
  "type" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
exports.svcsSvcKeyProcessersGet = function(svcKey) {

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
exports.svcsSvcKeyProcessersPut = function(svcKey, body) {

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
