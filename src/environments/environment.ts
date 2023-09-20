// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'mereka-io-staging',
    appId: '1:778972893213:web:de4847e8f83cf58d70f6f4',
    storageBucket: 'mereka-io-staging.appspot.com',
    apiKey: 'AIzaSyDJ1hNgS9agYatYUWDssYT9wT0szaMeEPk',
    authDomain: 'mereka-io-staging.firebaseapp.com',
    messagingSenderId: '778972893213',
  },
  production: false,
  algoliasearch: {
    appId: "P0ITYJAOVO",
    apiKey: "4ae513a5e8753428caf9e399479f5e57"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
