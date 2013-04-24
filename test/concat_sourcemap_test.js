'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.concat_sourcemap = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(2);

    var actual = grunt.file.read('tmp/default_options');
    var expected = grunt.file.read('test/expected/default_options');
    test.equal(actual, expected, 'should describe what the default behavior is.');

    var actualMap = grunt.file.read('tmp/default_options.map');
    var expectedMap = grunt.file.read('test/expected/default_options.map');
    test.equal(actualMap, expectedMap, 'should describe what the default behavior is.');

    test.done();
  },
  custom_options: function(test) {
    test.expect(2);

    var actual = grunt.file.read('tmp/custom_options');
    var expected = grunt.file.read('test/expected/custom_options');
    test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');

    var actualMap = grunt.file.read('tmp/custom_options.map');
    var expectedMap = grunt.file.read('test/expected/custom_options.map');
    test.equal(actualMap, expectedMap, 'should describe what the custom option(s) behavior is.');

    test.done();
  },
};
