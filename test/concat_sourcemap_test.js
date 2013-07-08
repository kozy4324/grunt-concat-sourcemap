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
    test.equal(actual, expected, 'should join files with default separator.');

    var actualMap = grunt.file.read('tmp/default_options.js.map');
    var expectedMap = grunt.file.read('test/expected/default_options.js.map');
    test.equal(actualMap, expectedMap, 'should write a source map file.');

    test.done();
  },
  options_with_sourceRoot: function(test) {
    test.expect(2);

    var actual = grunt.file.read('tmp/options_with_sourceRoot.js');
    var expected = grunt.file.read('test/expected/options_with_sourceRoot.js');
    test.equal(actual, expected, 'should not affect a output joined file.');

    var actualMap = grunt.file.read('tmp/options_with_sourceRoot.js.map');
    var expectedMap = grunt.file.read('test/expected/options_with_sourceRoot.js.map');
    test.equal(actualMap, expectedMap, 'should write a source map file including `sourceRoot` property.');

    test.done();
  },
  options_with_sourcesContent: function(test) {
    test.expect(2);

    var actual = grunt.file.read('tmp/options_with_sourcesContent.js');
    var expected = grunt.file.read('test/expected/options_with_sourcesContent.js');
    test.equal(actual, expected, 'should not affect a output joined file.');

    var actualMap = grunt.file.read('tmp/options_with_sourcesContent.js.map');
    var expectedMap = grunt.file.read('test/expected/options_with_sourcesContent.js.map');
    test.equal(actualMap, expectedMap, 'should write a source map file including `sourcesContent` property.');

    test.done();
  },
  with_coffee: function(test) {
    test.expect(1);

    var actualMap = grunt.file.read('tmp/with_coffee.js.map');
    var expectedMap = grunt.file.read('test/expected/with_coffee.js.map');
    test.equal(actualMap, expectedMap, 'should resolve combined source map.');

    test.done();
  },
};
