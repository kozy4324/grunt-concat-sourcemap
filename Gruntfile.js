/*
 * grunt-concat-sourcemap
 * https://github.com/k-nakamura/grunt-concat-sourcemap
 *
 * Copyright (c) 2013 Koji NAKAMURA
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    copy: {
      file: {
        src: 'test/fixtures/file4.coffee',
        dest: 'tmp/file5.coffee'
      }
    },

    coffee: {
      // TEST CASE: source map including `sourceRoot` property.
      file4: {
        options: {
          sourceMap: true
        },
        src: 'test/fixtures/file4.coffee',
        dest: 'tmp/compiled4.js'
      },
      // TEST CASE: source map including *NO* `sourceRoot` property.
      file5: {
        options: {
          sourceMap: true
        },
        src: 'tmp/file5.coffee',
        dest: 'tmp/compiled5.js'
      }
    },

    // Configuration to be run (and then tested).
    concat_sourcemap: {
      default_options: {
        options: {
        },
        files: {
          'tmp/default_options.js': [
            'test/fixtures/file1.js',
            'test/fixtures/file2.js',
            'test/fixtures/file3.js'
          ],
        },
      },
      options_with_sourceRoot: {
        options: {
          sourceRoot: 'tmp',
        },
        files: {
          'tmp/options_with_sourceRoot.js': [
            'test/fixtures/file1.js',
            'test/fixtures/file2.js',
            'test/fixtures/file3.js'
          ],
        },
      },
      options_with_sourcesContent: {
        options: {
          sourcesContent: true,
        },
        files: {
          'tmp/options_with_sourcesContent.js': [
            'test/fixtures/file1.js',
            'test/fixtures/file2.js',
            'test/fixtures/file3.js'
          ],
        },
      },
      with_coffee: {
        options: {
        },
        files: {
          'tmp/with_coffee.js': [
            'test/fixtures/file1.js',
            'test/fixtures/file2.js',
            'test/fixtures/file3.js',
            '<%= coffee.file4.dest %>',
            '<%= coffee.file5.dest %>'
          ],
        },
      },
      with_existing_map: {
        options: {
        },
        files: {
          'tmp/with_existing_map.js': [
            'test/fixtures/file1.js',
            'test/fixtures/file6.min.js'
          ],
        },
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'copy', 'coffee', 'concat_sourcemap', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
