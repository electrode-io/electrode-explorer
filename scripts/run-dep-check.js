"use strict";

const checkDependencies = require("../server/component-data/check-dependencies");

const pkg = require("@walmart/wmreact-interactive/package.json");

checkDependencies("react/interactive", pkg.dependencies, pkg.devDependencies);
