---
layout: page
permalink: /p/javafutbolee/wiki/development/
menu: true
title: development
description: Java Web Application to manage a football club's partners and ticket reservations for games. 
github-url: dacopan/javafutbolee
github-ribbon: |        
    <a class="ribbon" href="https://github.com/dacopan/javafutbolee"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/652c5b9acfaddf3a9c326fa6bde407b87f7be0f4/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6f72616e67655f6666373630302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_orange_ff7600.png"></a>
---

## Steps to configure your development enviroment.

### IDE
* Download and install Java JDK 8 with JEE 7
* [Download](https://netbeans.org/downloads/index.html) and install Netbeans 8.1+ with all features (215 MB)
* Download and install GlassFish Server if not install yet

### GIT
* Create an account on GitHub if you do not have account yet.
* [Download](https://git-scm.com/download/win) and install Git in your machine.
* Configure Git to use your username & email of GitHub

```shell
$ git config --global user.name "GITHUB_USERNAME"
$ git config --global user.email "GITHUB_USER_EMAIL"
```

* create folder to store repo and locate in (PROJECT_FOLDER: ie. javafutbolee)
* clone repo
```shell
$ git clone https://github.com/dacopan/javafutbolee.git
```

### Node
* [Download](https://nodejs.org/en/) and install Node.js

> if use ubuntu follow [this](https://github.com/nodejs/node-v0.x-archive/wiki/Installing-Node.js-via-package-manager)

* Install required node modules
```
# npm install -g bower gulp gulp-concat gulp-less gulp-minify-css gulp-minify-html gulp-uglify gulp-load-plugins rimraf
```


### Work with assets
 JavaFutbolEE use {less} to generate css files
* locate in resources folder of web project module
```shell
$ cd PROJECT_FOLDER
```

* Install node links to required node modules  
```
# npm link bower gulp gulp-concat gulp-less gulp-minify-css gulp-minify-html gulp-uglify gulp-load-plugins rimraf
```
* install bower packages
```shell
$ bower install
```

> If you have troubles with bower. You should configure github's ssh keys as show in my gist. Before execute bower command.

* now you can run gulp to compile assets
```shell
$ gulp allx
```

### Run
Congratulations, now you have a full configured environment to compile and run JavaFutbolEE, to make it, please run your netbeans ide and open this project with its 3 modules.

If you have questions please contact me on chatroom or email, also if you find any bug, or have suggestions please open a new issue on github.

All pull requests are welcome.