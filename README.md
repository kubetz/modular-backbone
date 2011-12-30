Modular Backbone Project Template
=================================

This project is based on the work of Thomas Davis and his
[Organizing your application using Modules (require.js)](http://backbonetutorials.com/organizing-backbone-using-modules/) tutorial.

Aim of this project is to provide minimalistic structure of the Backbone project using RequireJS that is containing up-to-date libraries and
is immediately ready for the implementation. This version contains neither sample implementation nor stylesheets and other assets.

If you want to have a look at the slightly different version of this project containing simple example implementation
have a look [here](https://github.com/thomasdavis/backbonetutorials/tree/gh-pages/examples/modular-backbone-updated).

Included Libraries
------------------

Libraries included in the project are currently only in their production (minified) versions.

* [RequireJS 1.0.3](http://requirejs.org/) with [text plugin](http://requirejs.org/docs/download.html#text) for templates
* [jQuery 1.7.1](http://jquery.com/)
* [Underscore 1.2.3](http://documentcloud.github.com/underscore/)
* [Backbone 0.5.3](http://documentcloud.github.com/backbone/) in a form of [optamd3 branch](https://github.com/jrburke/backbone/tree/optamd3) by James Burke

Using RequireJS Optimizer
-------------------------

Backbone Project Template contains a sample build file for [RequireJS Optimizer](http://requirejs.org/docs/optimization.html) located in [js/app.build.js](https://github.com/dzejkej/modular-backbone/blob/master/js/app.build.js). All configuration options are available [here](https://github.com/jrburke/r.js/blob/master/build/example.build.js).

For everyone that cannot live without LICENSE - [here it is](http://sam.zoy.org/wtfpl/COPYING) ☺.