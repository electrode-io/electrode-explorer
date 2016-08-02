#!/usr/bin/env bash

if [ -z "$1" ]; then
  echo "No module name specified. Exiting."
  exit 1
fi

if which npm; then
  npm info $1
elif [ -f /usr/local/lib/electrode-ops-helpers.sh ]; then
  source /usr/local/lib/electrode-ops-helpers.sh
  prepare_nodejs 4
  npm set registry https://npme.walmart.com/
  npm set strict-ssl false
  npm info $1
fi
