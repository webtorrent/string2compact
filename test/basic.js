var string2compact = require('../')
var test = require('tape')

test('single', function (t) {
  var compact = string2compact('10.10.10.5:65408')
  t.deepEqual(compact, new Buffer('0A0A0A05FF80', 'hex'))
  t.end()
})

test('mutli', function (t) {
  var compacts = string2compact([ '10.10.10.5:128', '100.56.58.99:28525' ])
  t.deepEqual(compacts, new Buffer('0A0A0A05008064383a636f6d', 'hex'))
  t.end()
})