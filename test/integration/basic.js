/* global describe, it */

var assert = require('assert')
var bigi = require('bigi')
var aco = require('../../')

describe('arise-js (basic)', function () {
  it('can generate a random aco address', function () {
    // for testing only
    function rng () { return new Buffer('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz') }

    // generate random keyPair
    var keyPair = aco.ECPair.makeRandom({ rng: rng })
    var address = keyPair.getAddress()

    assert.strictEqual(address, 'ANoMWEJ9jSdE2FgohBLLXeLzci59BDFsP4')
  })

  it('can generate an address from a SHA256 hash', function () {
    var hash = aco.crypto.sha256('correct horse battery staple')
    var d = bigi.fromBuffer(hash)

    var keyPair = new aco.ECPair(d)
    var address = keyPair.getAddress()

    assert.strictEqual(address, 'AG5AtmiNbgv51eLwAWnRGvkMudVd7anYP2')
  })

  it('can generate a random keypair for alternative networks', function () {
    // for testing only
    function rng () { return new Buffer('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz') }

    var bitcoin = aco.networks.bitcoin

    var keyPair = aco.ECPair.makeRandom({ network: bitcoin, rng: rng })
    var wif = keyPair.toWIF()
    var address = keyPair.getAddress()

    assert.strictEqual(address, '182UrjSXQHy5DHUp8Xg1Nm5u979SojJY2P')
    assert.strictEqual(wif, 'L1Knwj9W3qK3qMKdTvmg3VfzUs3ij2LETTFhxza9LfD5dngnoLG1')
  })

  it('can import an address via WIF', function () {
    var keyPair = aco.ECPair.fromWIF('S9aCCSFvm8kNeyFb1t6pLb5oJs9tv96ag6uA8Du6UM7zsmsNHQiz')
    var address = keyPair.getAddress()

    assert.strictEqual(address, 'AcMiVQNHjggC1PyfVSvCcdWZKMisMKj8eo')
  })

})
