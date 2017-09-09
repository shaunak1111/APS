# HCSCFE

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

This app runs on web worker. The main angular library is rendered in the web wroker and main ui thread handles the rendering of the dom.If we inspect the console webworker.bundle.js renders the angular library.The App uses webpack to build the angular system.The app is deployed to the heroku url - https://hcscfeapp.herokuapp.com/

The app in production mode is gzipped, with aot and tree shaking using uglify plugin in webpack

## Initial Steps
Run `npm install`

## Development server

Run `npm run serve:dev` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` to build the project in production mode. The build artifacts will be stored in the `dist/` directory in production mode.

Run `npm run build:dev` to build the project in dev mode. The build artifacts will be stored in the `dist/` directory in dev mode.


## Running unit tests

Run `npm run test:dev` to execute the unit tests in dev mode via [Karma](https://karma-runner.github.io) and chrome to see the results.
Run `npm run test` to execute the unit tests in a headless browser for testing in CI via [Karma](https://karma-runner.github.io) using phantomJS.

## Serving the app

Run 'npm run serve:prod' to serve the app in prod mode.
Run 'npm run serve:dev' to serve the app in prod mode.

## Folder structure
Dist folder stores the build files
src folder stores the angular modules and components as generate by angular cli
The linting file is present in tslint.json in root folder
The webpack file for dev mode is webpack.config.js in root folder
The webpack production filr is webpack.prod.config.js in root folder

## Linting
Run npm run lint to test linting issues.