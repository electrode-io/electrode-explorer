#!/usr/bin/env bash

if [ -z "$1" ]; then
  echo "No module name specified. Exiting."
  exit 1
fi

function npm_install() {
  echo "installing $1"
  if which npm; then
    npm i $1
    npm i --only=dev $1
  else
    source `pwd`/scripts/prepare_nodejs.sh
    prepare_nodejs
    npm i $1
    npm i --only=dev $1
  fi
}

if [ -z "$2" ]; then
  version="latest"
else
  version=^$2
fi

npm_install $1@$version
`pwd`/scripts/post-install-module.sh $1 $2
