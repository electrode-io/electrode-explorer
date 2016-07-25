#!/usr/bin/env bash

if [ -z "$1" ]; then
  echo "No module name specified. Exiting."
  exit 1
fi

if [ ! -d client/demo-modules/$1 ]; then
  mkdir -p client/demo-modules/$1
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

function populate_react() {
  old0="React\."
  old1="_react2\.default\."
  old2="_react\."
  old3="_react2\['default'\]\."
  old4="_react2\[\"default\"\]\."
  new="window\.React\."
  sed "s/$old0/$new/g" $1 > $1.tmp
  sed "s/$old1/$new/g" $1.tmp > $1.tmp.2
  sed "s/$old2/$new/g" $1.tmp.2 > $1.tmp.3
  sed "s/$old3/$new/g" $1.tmp.3 > $1.tmp.4
  sed "s/$old4/$new/g" $1.tmp.4 > $1.tmp.5
  rm $1
  mv $1.tmp.5 $1
  rm $1.tmp*
}

function build() {
  rm node_modules/**/*/.babelrc
  babel node_modules/$1/demo/*.js* -d ./
  babel node_modules/$1/demo/**/*.js* -d ./

  update_src node_modules/$1/demo/demo.js "\/src\/" "\/lib\/"
  update_src node_modules/$1/demo/demo.js ".jsx" ""

  update_src node_modules/$1/demo/index.js "\/src\/" "\/lib\/"
  update_src node_modules/$1/demo/index.js ".jsx" ""

  add_global $1

  webpack --config ./component-webpack.config.js --colors --entry node_modules/$1/demo/demo.js --output-path server/data/demo-modules/$1 --output-filename bundle.min.js

  populate_react server/data/demo-modules/$1/bundle.min.js
}

build $1
