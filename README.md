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

The value that will be used to separate lines when generating sourceMappings.

#### options.sourceRoot

Type: `String`
Default value: `''`

An optional root for all relative URLs in the source map.

#### options.sourcesContent

Type: `Boolean`
Default value: `false`

An optional flag that tells the source map generator whether or not to include all original sources in the map. `sourcesContent` is an array of contents of the original source files. This is useful if you don't want to have to upload original src files to the webserver that will be serving the sourcemap.

### Usage Examples

#### Default Options

In this example, it will concatenate the two specified source files(in order), joining files with default separator(`grunt.util.linefeed`) and writing the output to `dest/default_options.js` and `dest/default_options.js.map`.

```js
grunt.initConfig({
  concat_sourcemap: {
    options: {},
    files: {
      'dest/default_options.js': ['src/a.js', 'src/b.js']
    }
  }
})
```

#### Using sourcesContent: true

When using `sourcesContent: true` the resulting sourceMap will include all the contents of each source file inside of an array called `sourcesContent`

Given sample files as follows:

`src/a.js`

```js
"file a - line 1";
"file a - line 2";

```

`src/b.js` with contents as follows:

```js
"file b - line 1";

```

and the following Grunt configuration target for `concat_sourcemap`

```js
grunt.initConfig({
  concat_sourcemap: {
    options: {
      sourcesContent: true
    },
    files: {
      'dest/default_options.js': ['src/a.js', 'src/b.js']
    }
  }
})
```

You would see a resulting `dest/default_options.js.map` that included `sourcesContent` like so:

```json
  {
    "version": 3,
    "file": "default_options.js.map",
    "sources": [
      "src/a.js",
      "src/b.js"
    ],
    "names": [],
    "mappings": "AAAA;AACA;AACA;A;ACFA;AACA;A;ACDA;A",
    "sourcesContent": [
      "\"file a - line 1\";\n\"file a - line 2\";\n",
      "\"file b - line 1\";\n"
    ]
  }
```

Contributing
------------

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

