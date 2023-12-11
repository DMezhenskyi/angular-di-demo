import { APP_INITIALIZER, ApplicationConfig, inject } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { catchError, of, tap } from 'rxjs';
import { AppConfigService } from './core/app-config.service';
import { AppConfig } from './models';
import { POLLING_INTERVAL } from './tokens';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: () => {
        const http = inject(HttpClient);
        const appConfigService = inject(AppConfigService);
        const defaultInterval = inject(POLLING_INTERVAL);

        return () =>
          http.get<AppConfig>(`http://localhost:3000/resolveAppConfig`).pipe(
            catchError(() =>
              of({
                pollingStrategy: 'default',
                defaultInterval: defaultInterval,
              } as const)
            ),
            tap((config) => appConfigService.setConfig(config))
          );
      },
      multi: true,
    },
  ],
};
