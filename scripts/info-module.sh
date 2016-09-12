#!/usr/bin/env bash

if [ -z "$1" ]; then
  echo "No module name specified. Exiting."
  exit 1
fi

if which npm; then
  npm info $1
else
  source `pwd`/scripts/prepare_nodejs.sh
  prepare_nodejs
  npm set strict-ssl false
  npm info $1
fi
