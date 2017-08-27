#!/usr/bin/env bash

if [ -z "$1" ]; then
  echo "No module name specified. Exiting."
  exit 1
fi

function update_content() {
  files=`find $1 -type f -name "$2"`
  for f in $files; do
    sed -i "" $3 $f
    sed -i $3 $f
  done
}

function add_global() {
  file=node_modules/$1/demo/EXPLORER.js
  rm $file
  echo "var demo=require(\"./demo\").default;global._COMPONENTS=global._COMPONENTS||{};global._COMPONENTS[\"$1\"]=demo;" >> $file
}

function run_babel() {
  rm node_modules/$1/.babelrc
  `pwd`/node_modules/.bin/babel node_modules/$1/demo -d node_modules/$1/demo
}

function build() {
  run_babel $1

  update_content node_modules/$1/demo "*.js" 's/\.jsx//g'

  cp -r node_modules/$1/lib/* node_modules/$1/src

  add_global $1

  outputPath="data/demo-modules/$1/v$2"
  echo "Webpack running for $1";
  `pwd`/node_modules/.bin/webpack --config ./component-webpack.config.js --colors --entry ./node_modules/$1/demo/EXPLORER.js --output-path $outputPath
  echo "Webpack finished for $1";
}

build $1 $2
