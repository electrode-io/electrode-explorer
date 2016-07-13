#!/bin/sh

################################################################################
# Description: `lock` package.json via `npm shrinkwrap` and `clean-shrinkwrap.js`
# Proposal: https://gecgithub01.walmart.com/electrode/proposals/issues/65
################################################################################

NODE_VER=`node --version | cut -d'.' -f1`
if [ "x$NODE_VER" != "xv4" ]
then
  echo "ERROR: Please use node v4."
  exit 1
fi

NPM_VER=`npm --version | cut -d'.' -f1`
if [ "x$NPM_VER" != "x3" ]
then
  echo "ERROR: Please use npm v3."
  exit 2
fi

PWD=`pwd`
CURR=`basename $PWD`
if [ "x$CURR" = "xbin" ]
then
  cd ..
fi

if [ ! -f package.json ]
then
  echo "ERROR: Please run this script from the root directory of your project."
  exit 3
fi

# npm@3.x shrinkwrap of git dependencies fails hard on subsequent `npm shrinkwrap` or `npm ls` #10502
# https://github.com/npm/npm/issues/10502
if [ -f npm-shrinkwrap.json ]
then
  echo "INFO: removing old 'npm-shrinkwrap.json' to prevent 'shrinkwrap rerun errors with npm@3'."
  rm npm-shrinkwrap.json
fi

if [ -d node_modules ]
then
  echo "INFO: removing 'node_modules/'"
  rm -Rf node_modules
fi

echo "INFO: running 'npm cache clean'."
npm cache clean

echo "INFO: running 'npm install'."
npm install

if [ $? -ne 0 ]
then
  echo "ERROR: 'npm install' failed. Not shrinkwrapping."
  exit 4
fi

echo "INFO: shrinkwrapping with dev dependencies."
npm shrinkwrap --dev

if [ $? -eq 0 ]
then
  # Looks like Angular.js folks also had shrinkwrap issues:
  # https://github.com/angular/angular.js/blob/master/scripts/npm/clean-shrinkwrap.js
  echo "INFO: cleaning npm-shrinkwrap.js"
  node ./bin/clean-shrinkwrap.js
else
  echo "ERROR: 'npm shrinkwrap --dev' failed. Not running 'clean-shrinkwrap.js'"
  exit 5
fi

