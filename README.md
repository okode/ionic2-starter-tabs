Ionic2 Starter Tabs
===================

A starting project for Ionic2 using a simple tabbed interface.

Requirements
------------

* Homebrew
```
$ brew update ; brew upgrade
```

* Xcode 8
Install latest version from App Store.

* Android SDK
```
$ brew install java android-sdk
```

* Yarn
```
$ brew install yarn
```

* Ionic2
```
$ brew install node ios-sim ios-deploy
$ npm update -g
$ npm install -g ionic cordova
```

Create a new Git repository
---------------------------
https://help.github.com/articles/creating-a-new-repository/

Create new App
--------------
Start new App from template
```
$ ionic start --v2 --appname Demo --id com.okode.demo --skip-npm demo https://github.com/okode/ionic2-starter-tabs
$ cd demo
```

Update executable permission for scripts
----------------------------------------
```
$ chmod a+x release.sh
```

Create initial yarn.lock file
-----------------------------
```
$ yarn install
```

Update Git repo enabling Git Flow
---------------------------------
```
$ git init
$ git add .
$ git add -f www .editorconfig .gitignore
$ git commit -m"Initial import"
$ git remote add origin https://github.com/okode/demo
$ git push -u origin master
$ git flow init
$ git push --set-upstream origin develop
```
