# Client and Server Component

![Client and Server Component](./README_assets/mereka.io%20-%20Angular%20Universal%20Checklist-Client%20and%20Server%20Component.drawio.svg)

# Architectural Pattern

![Architectural Pattern](./README_assets/mereka.io%20-%20Angular%20Universal%20Checklist-Architectural%20Pattern.drawio.svg)

# Steps to reproduce

1. Create new project with Angular 13

Command to run:
```
npx @angular/cli@13 new angular-firebase-universal-poc
```

2. Update to Angular 13.4.0

Command to run:
```
npx ng update @angluar/core@13 @angular/cli@13
```

3. Install algoliasearch

Command to run:
```
npm install algoliasearch
```

4. Install Angular Universal

Command to run:
```
npx ng add @nguniversal/express-engine
```

5. Install AngularFire

    Possible issue: 
    1. `npx ng add @angular/fire`
        
        ```
        ✖ Package install failed.
        /Users/jason/Work/mereka/angular-firebase-universal-poc/node_modules/@angular-devkit/schematics/node_modules/rxjs/internal/util/hostReportError.js:4
            setTimeout(function () { throw err; }, 0);
        ```

    [issue](https://github.com/angular/angularfire/issues/3105)

    solution: run `npm i -D firebase-tools` before `npx ng add @angular/fire`

Command to run
```
npm i -D firebase-tools
npx ng add @angular/fire
```

If prompted `What features would you like to setup`, uncheck `ng deploy -- hosting` and check `Firestore`.

# Solution to fix slow TTFB: Prerender

1. Prerender

disadvantage: static / pre-rendered content is not tailored to the user.

TODO:
- [ ] region-specific pre-rendered content.

    Bad solution: pre-rendered HTML for everyone.
    1. When a Googlebot visit `/experiences`, Angular will redirect it to `/experiences/:region`. The Googlebot will get a `pre-rendered HTML`.
    2. When a user visit `/experiences`, Angular will redirect it to `/experiences/:region`. The user will get a `pre-rendered HTML`.
    3. The server periodically prerender the new experience i.e. every 5 minutes.

    disadvantage: what about the new experience?

    Good solution: Dynamic Rendering
    1. When a Googlebot visit `/experiences`, Angular will redirect it to `/experiences/:region`. The Googlebot will get a `pre-rendered HTML`.
    2. When a user visit `/experiences`, Angular will redirect it to `/experiences/:region`. The user will get a `Client Side Rendered HTML`.
    3. The server periodically prerender the new experience i.e. every 5 minutes.

Command to run:
```
npx ng run angular-firebase-universal-poc:prerender --no-guess-routes --routes-file routes.txt
```

2. Starts the server scripts for serving the application lcoally with server-side rendering.

Command to run:
```
npm run serve:ssr
```

# TODO

- [ ] `/experience/:experience` is not server side rendered.

# Solution to fix slow TTFB: Dynamic Rendering

![Dynamic Rendering](./README_assets/mereka.io%20-%20Angular%20Universal%20-%20PoC%20_experiences-proposal.drawio.svg)

# Result

![Result](./README_assets/mereka.io%20-%20Angular%20Universal%20-%20PoC%20_experiences.drawio.svg)

# AngularFirebaseUniversalPoc

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
