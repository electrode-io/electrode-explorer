#!/usr/bin/env bash

if [ -z "$1" ]; then
  echo "No module name specified. Exiting."
  exit 1
fi

if [ -f /usr/local/lib/electrode-ops-helpers.sh ]; then
  source /usr/local/lib/electrode-ops-helpers.sh
  prepare_nodejs 4
  npm set registry https://npme.walmart.com/
  npm set strict-ssl false
fi

npm i $1@latest
