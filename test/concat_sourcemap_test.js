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
  options_with_process: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/options_with_process.js');
    var expected = grunt.file.read('test/expected/options_with_process.js');
    test.equal(actual, expected, 'should use process function to modify concatenated file');

    test.done();
  },
  with_coffee: function(test) {
    test.expect(1);

    var actualMap = grunt.file.read('tmp/with_coffee.js.map');
    var expectedMap = grunt.file.read('test/expected/with_coffee.js.map');
    test.equal(actualMap, expectedMap, 'should resolve combined source map.');

    test.done();
  },
  css_files: function(test) {
    var actualContent, expectedContent, actualMap, expectedMap;

    test.expect(2);

    actualContent = grunt.file.read('tmp/css_files.css');
    expectedContent = grunt.file.read('test/expected/css_files.css');
    test.equal(actualContent, expectedContent, 'should output linking line as `/*# sourceMappingURL=<URL> */`.');

    actualMap = grunt.file.read('tmp/css_files.css.map');
    expectedMap = grunt.file.read('test/expected/css_files.css.map');
    test.equal(actualMap, expectedMap, 'should write a source map.');

    test.done();
  },
  css_files_with_sass_generated: function(test) {
    var actualContent, expectedContent, actualMap, expectedMap;

    test.expect(2);

    actualContent = grunt.file.read('tmp/css_files_with_sass_generated.css');
    expectedContent = grunt.file.read('test/expected/css_files_with_sass_generated.css');
    test.equal(actualContent, expectedContent, 'should concatenate contents except for linking lines.');

    actualMap = grunt.file.read('tmp/css_files_with_sass_generated.css.map');
    expectedMap = grunt.file.read('test/expected/css_files_with_sass_generated.css.map');
    test.equal(actualMap, expectedMap, 'should write a source map resolving combined source map.');

    test.done();
  },
  file_with_linking: function(test) {
    var actualContent, expectedContent, actualMap, expectedMap;

    test.expect(2);

    actualContent = grunt.file.read('tmp/file_with_linking.js');
    expectedContent = grunt.file.read('test/expected/file_with_linking.js');
    test.equal(actualContent, expectedContent, 'should concatenate contents and resolve the linking.');

    actualMap = grunt.file.read('tmp/file_with_linking.js.map');
    expectedMap = grunt.file.read('test/expected/file_with_linking.js.map');
    test.equal(actualMap, expectedMap, 'should concatenate contents and resolve the linking.');

    test.done();
  },
  file_with_old_linking: function(test) {
    var actualContent, expectedContent, actualMap, expectedMap;

    test.expect(2);

    actualContent = grunt.file.read('tmp/file_with_old_linking.js');
    expectedContent = grunt.file.read('test/expected/file_with_old_linking.js');
    test.equal(actualContent, expectedContent, 'should concatenate contents and resolve the old linking.');

    actualMap = grunt.file.read('tmp/file_with_old_linking.js.map');
    expectedMap = grunt.file.read('test/expected/file_with_old_linking.js.map');
    test.equal(actualMap, expectedMap, 'should concatenate contents and resolve the old linking.');

    test.done();
  },
};
