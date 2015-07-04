'use strict';

exports.svcsSvcKeyBuildGet = function(svcKey) {

  var examples = {};
  
  examples['application/json'] = {
  "key" : "aeiou"
};
  

  
  if(Object.keys(examples).length > 0)
    return examples[Object.keys(examples)[0]];
  
}
