#!/bin/bash

if [ $# -ne 2 ]; then
  echo "Syntax: release [CURRENT_VERSION] [NEXT_VERSION]"
  exit 1
fi

CURRENT=$1
NEXT=$2

# Create release
git flow release start $CURRENT || exit 1
GIT_MERGE_AUTOEDIT=no git flow release finish -m $CURRENT $CURRENT

# Publish release
git push origin HEAD --tags

# Merge release into develop
git checkout develop
git merge master

# Bump version
sed -i '' "s/version=\"$CURRENT\"/version=\"$NEXT\"/" customer/config.xml
sed -i '' "s/version=\"$CURRENT\"/version=\"$NEXT\"/" garage/config.xml
sed -i '' "s/\"version\": \"$CURRENT\"/\"version\": \"$NEXT\"/" customer/package.json
sed -i '' "s/\"version\": \"$CURRENT\"/\"version\": \"$NEXT\"/" garage/package.json
sed -i '' "s/version = '$CURRENT'/version = '$NEXT'/" dashboard/build.gradle

# Update develop with new bumped version
git commit -a -m"Bumped version ($NEXT) [ci skip]"
git push
