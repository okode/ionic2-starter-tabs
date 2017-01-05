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
$ ionic start --v2 \
--appname Demo \
--id com.okode.demo \
--skip-npm demo https://github.com/okode/ionic2-starter-tabs
$ cd demo
```

Create README.md
----------------

```
$ echo 'Demo' > README.md
```

Update executable permission for scripts
----------------------------------------

```
$ chmod a+x release.sh travis/*.sh
```

Create initial yarn.lock file
-----------------------------

```
$ yarn install
```

Add Crashlytics plugin
----------------------

```
$ ionic plugin add cordova-fabric-plugin --save \
--variable FABRIC_API_KEY=xxx \
--variable FABRIC_API_SECRET=xxx
```

Update Git repo enabling Git Flow
---------------------------------

```
$ git init
$ git add .
$ git add -f www
$ git commit -m"Initial import"
$ git remote add origin https://github.com/okode/demo
$ git push -u origin master
$ git flow init -d
$ git push -u origin develop
```
