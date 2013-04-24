'use strict';

var grunt = require('grunt');

exports.concat_sourcemap = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(2);

    var actual = grunt.file.read('tmp/default_options.js');
    var expected = grunt.file.read('test/expected/default_options.js');
    test.equal(actual, expected, 'should describe what the default behavior is.');

    var actualMap = grunt.file.read('tmp/default_options.js.map');
    var expectedMap = grunt.file.read('test/expected/default_options.js.map');
    test.equal(actualMap, expectedMap, 'should describe what the default behavior is.');

    test.done();
  },
  custom_options: function(test) {
    test.expect(2);

    var actual = grunt.file.read('tmp/custom_options.js');
    var expected = grunt.file.read('test/expected/custom_options.js');
    test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');

    var actualMap = grunt.file.read('tmp/custom_options.js.map');
    var expectedMap = grunt.file.read('test/expected/custom_options.js.map');
    test.equal(actualMap, expectedMap, 'should describe what the custom option(s) behavior is.');

    test.done();
  },
};
