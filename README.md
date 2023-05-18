# MyFlixAngularClient

This project is a web application about women in the film industry.
It was built as a task for Achievement 6 in [CareerFoundry's Full-Stack Web Development program](https://careerfoundry.com/en/courses/become-a-web-developer) and uses the RESTful [Movie API](https://github.com/NeleSchallenberg/movie-api) from Achievement 2.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.2.

## About

The achievement objective is to build a client-side component with Angular and to learn how to work with others by writing and sharing documentation, providing feedback, and making a contribution to the tech community.

## User Stories

- As a user, I want to be able to receive information on movies, directors, and genres so that I can learn more about movies I’ve watched or am interested in.
- As a user, I want to be able to create a profile so I can save data about my favorite movies.

## User Flow

![User Flow Chart](https://github.com/NeleSchallenberg/myFlix-Angular-client/blob/main/src/assets/user-flow.jpg)

## Key Features

- Your app should display a welcome view where users will be able to either log in or register an account.
- Once authenticated, the user should now view all movies.
- Upon clicking on a particular movie, users will be taken to a single movie view, where
additional movie details will be displayed. The single movie view will contain the following additional features:
    ○ A button that when clicked takes a user to the ​director view,​ where details about the director of that particular movie will be displayed.
    ○ A button that when clicked takes a user to the ​genre view,​ where details about that particular genre of the movie will be displayed.

## Technical requirements

- The application must be written in Angular (version 9 or later)
- The application requires the latest version of Node.js and npm package
- The application must contain user registration and login forms
- The application must be designed using Angular Material
- The application's codebase must contain comments using Typedoc
- The project must contain technical documentation using JSDoc
- The project must be hosted on GitHub Pages

## Tech stack

- [Angular](https://angular.io)

## Dependencies

```
"@angular/animations": "^16.0.0",
"@angular/common": "^16.0.0",
"@angular/compiler": "^16.0.0",
"@angular/core": "^16.0.0",
"@angular/forms": "^16.0.0",
"@angular/platform-browser": "^16.0.0",
"@angular/platform-browser-dynamic": "^16.0.0",
"@angular/router": "^16.0.0",
"rxjs": "^7.5.2",
"tslib": "^2.3.0",
"zone.js": "~0.13.0"
```

## Setting up the app

### Getting started

- Install and use the latest version of node
- Install Angluar CLI: `npm install -g @angular/cli`
- Clone the repository `git clone https://github.com/NeleSchallenberg/myFlix-Angular-client.git`
- Navigate to the project folder in your terminal: `cd myFlix-Angular-client`
- Run `ng serve --open` to open the app on a development server (`http://localhost:4200/`)

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Links

- [Project Brief](https://images.careerfoundry.com/public/courses/fullstack-immersion/Full-Stack%20Immersion%20A6%20Project%20Brief.pdf)
- [API on GitHub](https://github.com/NeleSchallenberg/movie-api)
- [Api Documentation](https://female-filmmakers.herokuapp.com/documentation.html)