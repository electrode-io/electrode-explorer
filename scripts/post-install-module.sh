#!/usr/bin/env bash

if [ -z "$1" ]; then
  echo "No module name specified. Exiting."
  exit 1
fi

function update_src() {
  if [ -f $1 ]; then
    grep $2 $1
    if [ $? -eq 0 ]; then
      sed "s/$2/$3/g" $1 > $1.new
      rm $1
      mv $1.new $1
    fi
  fi
}

function add_global() {
  file=node_modules/$1/demo/demo.js
  exp=$(grep "exports.default" $file)
  var_name=$(echo $exp | cut -d "=" -f 2 | cut -d ";" -f 1)
  echo "global._COMPONENTS=global._COMPONENTS || {};global._COMPONENTS[\"$1\"] = $var_name;" >> $file
}

function build() {
  rm node_modules/**/*/.babelrc
  babel node_modules/$1/demo -d node_modules/$1/demo
  babel node_modules/$1/src -d node_modules/$1/src

  update_src node_modules/$1/demo/demo.js "\/src\/" "\/lib\/"
  update_src node_modules/$1/demo/demo.js ".jsx" ""

  update_src node_modules/$1/demo/index.js "\/src\/" "\/lib\/"
  update_src node_modules/$1/demo/index.js ".jsx" ""

  add_global $1

  webpack --config ./component-webpack.config.js --colors --entry node_modules/$1/demo/demo.js --output-path server/data/demo-modules/$1 --output-filename bundle.min.js
}

build $1
