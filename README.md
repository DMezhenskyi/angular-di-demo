# AngularDiDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.5.

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Start server

Make sure that you start the server by running `node ./server.js`

## Tasks

- in ./core/data-polling.service.ts file, make `#interval` property configurable via DI;
- make polling interval different for each route e.g. '' - 1sec, '/admin' - 3sec, '/help' - 10s
- WITHOUT changing page components, replace the usage of `DataPollingService` with the `AdvancedDataPollingService` and think how you could make the solution less error-prone
- make the `#interval` property in `AdvancedDataPollingService` also configurable via DI;
- Refactor components by extracting state into a dedicated `state.service.ts` service. Think about how to make a separate instance of this service for each component.
- Think about how we could configure the injection of `StateService` to make sure that the service has been injected from the current component injection and not the parent one.

### Additional Tasks

- Implement the functionality when proper polling intervals and polling strategy services are resolved depending on the response from the server.

Hint: The application during the initialization has to make a request to `http://localhost:3000/resolveAppConfig`. The response (config) should be stored in `AppConfigService` using its method `setConfig`. After that, use the saved config to resolve polling providers for routes based on the config from the server. Think about error handling.
