#!/usr/bin/env bash

if [ -z "$1" ]; then
  echo "No module name specified. Exiting."
  exit 1
fi

if [ ! -d client/demo-modules/$1 ]; then
  mkdir -p client/demo-modules/$1
fi

function copy_and_clean() {
  cp -r node_modules/$1 client/demo-modules/@walmart/
  rm -rf client/demo-modules/$1/node_modules client/demo-modules/$1/lib client/demo-modules/$1/test client/demo-modules/$1/.idea client/demo-modules/$1/coverage client/demo-modules/$1/dist
  rm client/demo-modules/$1/package.json client/demo-modules/$1/README.md client/demo-modules/$1/components* client/demo-modules/$1/.*
  find client/demo-modules/$1 -name "*.flow" -type f -delete
}

str='@require "~@walmart/lithe-extras/lib/tenants/walmart/base"'
function import_stylus() {
  files=$(find client/demo-modules/$1 -name "*.styl")
  for file in $files
  do
    grep "$str" $file
    if [ $? -ne 0 ]; then
      mv $file $file.tmp
      echo "$str;" | cat - $file.tmp > $file
      rm $file.tmp
    fi
  done
}

copy_and_clean $1
import_stylus $1
