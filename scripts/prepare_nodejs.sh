function prepare_nodejs() {
  local version;
  if [ -n "$NODE_VERSION" ]; then
    version=$NODE_VERSION
  else
    version=4
  fi

  if [ -z `command -v nvm` ]; then
    local NVM_DIR="/usr/local/nvm"
    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.7/install.sh | NVM_DIR=$NVM_DIR bash
    [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
  fi

  nvm install $version

  npm set progress false
  npm set strict-ssl false

  local NPM_MAJOR=$(npm --version | cut -f1 -d.)
  if [ $version -ge 4 ]; then
    if [ $NPM_MAJOR -lt 3 ]; then
      echo "NPM major version is $NPM_MAJOR, upgrading to npm@3"
      npm install -g npm@^3
    fi
  fi
}
