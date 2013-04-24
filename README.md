grunt-concat-sourcemap
======================

> Concatenate files and generate a source map file.

Getting Started
------------------

This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-concat-sourcemap --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-concat-sourcemap');
```

The "concat_sourcemap" task
---------------------------

### Overview
In your project's Gruntfile, add a section named `concat_sourcemap` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  concat_sourcemap: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.separator

Type: `String`
Default value: `grunt.util.linefeed`

A string value that is used to do something with whatever.

### Usage Examples

#### Default Options

In this example, it will concatenate the two specified source files(in order), joining files with default separator(`grunt.util.linefeed`) and writing the output to `dest/default_options.js` and `dest/default_options.js.map`.

```js
grunt.initConfig({
  concat_sourcemap: {
    options: {},
    files: {
      'dest/default_options.js': ['src/a.js', 'src/b.js'],
    },
  },
})
```

Contributing
------------

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

