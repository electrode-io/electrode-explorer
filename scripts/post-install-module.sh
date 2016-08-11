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

function run_babel() {
  app_arch_config=node_modules/@walmart/electrode-archetype-react-app/config/babel
  comp_arch_config=node_modules/@walmart/electrode-archetype-react-component/config/babel
  mv $app_arch_config/.babelrc $app_arch_config/BABELRC
  mv $comp_arch_config/.babelrc $comp_arch_config/BABELRC
  rm node_modules/**/*/.babelrc
  mv $app_arch_config/BABELRC $app_arch_config/.babelrc
  mv $comp_arch_config/BABELRC $comp_arch_config/.babelrc
  `pwd`/node_module/.bin/babel node_modules/$1/demo -d node_modules/$1/demo
  `pwd`/node_module/.bin/babel node_modules/$1/test -d node_modules/$1/test
}

function build() {
  run_babel $1

  update_src node_modules/$1/demo/demo.styl "+\$tenant+" "+\"walmart\"+"
  for file in node_modules/$1/demo/*.js; do
    update_src $file ".jsx" ""
  done

  cp -r node_modules/$1/lib/* node_modules/$1/src

  add_global $1

  outputPath="server/data/demo-modules/$1/v$2"
  echo "Webpack running for $1";
  `pwd`/node_module/.bin/webpack --config ./component-webpack.config.js --colors --entry node_modules/$1/demo/demo.js --output-path $outputPath
  echo "Webpack finished for $1";
}

build $1 $2
