var _ = require('lodash')
var assert = require('core-assert')

module.exports = function (done) {
  _.defer(function () {
    assert.equal(98, 42)
    done()
  })
}
