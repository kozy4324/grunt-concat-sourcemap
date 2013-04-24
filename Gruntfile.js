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

    coffee: {
      files: {
        options: {
          sourceMap: true
        },
        src: 'test/fixtures/file4.coffee',
        dest: 'tmp/compiled.js'
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
      with_coffee: {
        options: {
        },
        files: {
          'tmp/with_coffee.js': [
            'test/fixtures/file1.js',
            'test/fixtures/file2.js',
            'test/fixtures/file3.js',
            '<%= coffee.files.dest %>'
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

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'coffee', 'concat_sourcemap', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
