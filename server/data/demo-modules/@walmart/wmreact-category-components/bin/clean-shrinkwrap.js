#!/usr/bin/env node

/********************************************************************************
 * (sourced and modified from:
 * https://github.com/angular/angular.js/blob/master/scripts/npm/clean-shrinkwrap.js)
 *
 * The MIT License
 *
 * Copyright (c) 2010-2016 Google, Inc. http://angularjs.org
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 ********************************************************************************/

/**
 * this script is just a temporary solution to deal with the issue of npm outputting the npm
 * shrinkwrap file in an unstable manner.
 *
 * See: https://github.com/npm/npm/issues/3581
 */

var _ = require("lodash");
var sorted = require("sorted-object");
var fs = require("fs");
var path = require("path");


function cleanModule(module, name) {

  // keep `resolve` properties for git dependencies, delete otherwise
  delete module.from;
  if (module.resolved) {
    delete module.resolved;
  }

  _.forEach(module.dependencies, function(mod, name) {
    cleanModule(mod, name);
  });
}


console.log("Reading npm-shrinkwrap.json");
var shrinkwrap = require("../npm-shrinkwrap.json");

console.log("Cleaning shrinkwrap object");
cleanModule(shrinkwrap, shrinkwrap.name);

var cleanShrinkwrapPath = path.join(__dirname, "..", "npm-shrinkwrap.json");
console.log("Writing cleaned to", cleanShrinkwrapPath);
fs.writeFileSync(cleanShrinkwrapPath, JSON.stringify(sorted(shrinkwrap), null, 2) + "\n");

