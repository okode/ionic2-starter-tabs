#!/bin/bash -v

PLATFORM=ios
if [[ "$TRAVIS_OS_NAME" == "linux" ]]; then
  PLATFORM=android
fi

yarn install
ionic platform add $PLATFORM
ionic build $PLATFORM
