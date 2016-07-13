#!/usr/bin/env bash

if [ -z "$1" ]; then
  echo "No module name specified. Exiting."
  exit 1
fi

if [ ! -d client/demo-modules/$1 ]; then
  mkdir -p client/demo-modules/$1
fi

cp -r node_modules/$1 client/demo-modules/@walmart/
rm client/demo-modules/$1/.babelrc
rm -rf client/demo-modules/$1/node_modules
find client/demo-modules/$1 -name "*.flow" -type f -delete
