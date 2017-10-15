# vue-webapp-seed
Vue and webpack Seed Project for The Greenhouse, as a template / starter project for frontend web applications.
This is a simple starter project meant to get you up and running as fast as possible with a full local and production 
build with all the tools working together and as minimal friction and configuration as possible.  Simply clone the 
repo and edit the files as needed to match your project.

## Setup Steps
- _README.md_ - project name, links, sections on release procedure, CI, AWS info
- _webpack.config.develop.js_ - API proxy
- _package.json_ - name, description, version
- Configure your project with continuous integration by running _bin/build.sh_


## Tooling
The following tools are used in the application

- [Vue][] - as the Front-End library using [Single File Components][] and ES6
- [Webpack][] - Module loader / bundler, primary build tool
- [Node][]  - local development and build time JavaScript runtime
- [Yarn][]  - package manager for build and application dependencies
- [Jest][] - unit testing library / runner, with [Enyzme][]

[Node]: https://nodejs.org/
[Yarn]: https://www.yarnpkg.com/
[Vue]: https://vuejs.org/
[Webpack]: https://webpack.github.io/
[Jest]: https://facebook.github.io/jest/
[Enzyme]: https://github.com/airbnb/enzyme
[Single File Components]: https://vuejs.org/v2/guide/single-file-components.html

## Links
* Repository (Github)- TODO <your-link-here>
* Issue Tracker (JIRA) - TODO <your-link-here>
* Documentation (Confluence) - TODO <your-link-here>
* Continuous Integration (Jenkins) - TODO <your-link-here>
* Development Environment - TODO <your-link-here>
* Production Enviornment - TODO <your-link-here>

## Project Setup
*Note*: It is recommended that a Javascript based IDE is used, like [Webstorm][],
as they have a lot of the code quality and syntax tooling supported as plugins, often times right out of the box.

Recommended plugins to have are:
- Git (can show changed lines in the gutter when viewing a file)
- EditorConfig
- gitignore
- Sass
- ESlint
- Vue
- NodeJS

[Webstorm]: https://www.jetbrains.com/webstorm/


### Steps

1. If you don't already have it, download and install NodeJS 6.x (comes with NPM).

2. This project favors Yarn, so make sure you have the latest by updating it after installing Node by running 

```
$ npm install -g yarn@^1.0.0
```

3. Now install the build and application dependencies by running

```
$ yarn install
```

## Project Layout
An overview of important files and configurations for the applications

### Root Files ('dot' files)
Also know as 'dot' files, these are the build and build configuration files for the application
* _bin/_ - shell scripts for continuous integration and build environments
* _.babelrc_ - configuration file for Jest Babel preproccessor
* _.editorconfig_ - configuration file for EditorConfig IDE plugin
* _.eslintrc_ - linting rules for spec and build files
* _package.json_ - NPM / Yarn dependency configuration file, for build related dependencies and defines all runnable scripts and commands
* _jest.config.json_ - configuration for Jest
* _webpack.config.common.js_ - webpack config for managing shared webpack configurations
* _webpack.config.develop.js_ - webpack config for local development
* _webpack.config.prod.js_ - webpack config for production builds

### Application Files
Application code, including unit tests.  Directories are intended to be kept as flat as possible with a B.O.F. (birds of
a feather) organization.  
* _src_ - application code
* _src/components/_ - resusable UI features
* _src/services/_ -  APIs for handling  backend REST APIs or browser APIs, non UI related 'helpers'
* _src/views/_ -  routable states ('pages')
* _src/index.html_ - main layout of the application
* _src/index.ts_ - main entry way into the application and 'bootstrapper'
* _src/polyfills.ts_ - collection of polyfills needed by the application
* _src/routes.ts_ - routes for the application, maps to different views
* _src/vendor.ts_ - vendor files from _node_modules_

[TSLint]: http://palantir.github.io/tslint/

## Tasks
This project uses Webpack as the build tool, exectuted via NPM scripts.  All available tasks are in the `scripts`
section of _package.json_

### Development
This will start up [webpack-dev-server](https://webpack.js.org/configuration/dev-server/), which watches for changes and 'redeploys' as needed.

```
$ yarn run develop
```

See it in a browser by opening up

```
http://localhost:4567/
```

### Production
This is the production build task for the project.  It is used prior to deploying to an environment and build a 
production version of the application.

**Note: This task exports** `NODE_ENV=production` by the use of using webpack's `-p` flag

```
$ yarn run build
```

### Continuous Integration
[Circle](https://circleci.com/gh/thegreenhouseio/) manages continuous integration in _.circleci/config.yml_.

### Demo
To serve a production build locally , like for a demo run:

```
$ npm run serve
```

**Note: it is recommended you run this command from the master branch or a tag.  By Default this proxies with the
 webpack-dev-server proxy.**


## Testing
To run Jest unit tests, run
```bash
$ yarn run test -- --watch
```


## Dependency Management
All dependencies added or removed from the project must be done so through yarn

### Add
```bash
# use --dev if it as devDependency
$ yarn add <package-name> [--dev]
```

### Remove
```
$ yarn remove <package-name>
```

### Upgrade
```
$ yarn upgrade <package-name>
```

## Continuous Integration
**TODO Document Your Continuous Integration Environment Here**


## Release Procedure
**TODO Document Your Release Procedure Here**


## AWS Info
**TODO Document Your AWS Info here (NO CREDENTIALS!!!!)**
* s3 bucket - 
* cloudfront distribution - 
