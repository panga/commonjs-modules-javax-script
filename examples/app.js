//load npm require
var Require = load('../require.js');
var npm = Require('./', ['node_modules']);

//load npm modules
var uuid = npm('node-uuid');

print(uuid.v1());