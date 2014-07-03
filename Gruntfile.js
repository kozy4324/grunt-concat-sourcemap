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

    sass: {
      dist: {
        options: {
          sourcemap: true
        },
        files: {
          'test/fixtures/compiled1.css': 'test/fixtures/source1.scss',
          'test/fixtures/compiled2.css': 'test/fixtures/source2.scss'
        }
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
      options_with_process: {
        options: {
          process: function(src) {
            return '(function(){' + src + '})();';
          }
        },
        files: {
          'tmp/options_with_process.js': [
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
      },
      css_files: {
        options: {
        },
        files: {
          'tmp/css_files.css': [
            'test/fixtures/css1.css',
            'test/fixtures/css2.css'
          ],
        },
      },
      css_files_with_sass_generated: {
        options: {
          sourceRoot: '../',
        },
        files: {
          'tmp/css_files_with_sass_generated.css': [
            'test/fixtures/compiled1.css',
            'test/fixtures/compiled2.css'
          ],
        },
      },
      file_with_linking: {
        files: {
          'tmp/file_with_linking.js': [
            'test/fixtures/file_with_linking1.js',
            'test/fixtures/file_with_linking2.js'
          ],
        },
      },
      file_with_old_linking: {
        files: {
          'tmp/file_with_old_linking.js': [
            'test/fixtures/file_with_old_linking1.js',
            'test/fixtures/file_with_old_linking2.js'
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
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'copy', 'coffee', 'concat_sourcemap', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
