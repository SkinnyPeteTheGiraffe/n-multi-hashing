apt-get install -y node-gyp
node-gyp clean
node-gyp configure
node-gyp build --debug
