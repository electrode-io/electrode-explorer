#!/usr/bin/env bash

if [ -z "$1" ]; then
  echo "No module name specified. Exiting."
  exit 1
fi

if [ ! -d client/demo-modules/$1 ]; then
  mkdir -p client/demo-modules/$1
fi

cp -r node_modules/$1 client/demo-modules/@walmart/
rm -rf client/demo-modules/$1/node_modules client/demo-modules/$1/lib client/demo-modules/$1/test client/demo-modules/$1/.idea client/demo-modules/$1/coverage
rm client/demo-modules/$1/package.json client/demo-modules/$1/README.md client/demo-modules/$1/components* client/demo-modules/$1/.*
find client/demo-modules/$1 -name "*.flow" -type f -delete
