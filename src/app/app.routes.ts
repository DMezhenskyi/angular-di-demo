import { Routes } from '@angular/router';
import { POLLING_INTERVAL } from './tokens';
import { DataPollingService } from './core/data-polling.service';
import { AdvancedDataPollingService } from './core/advanced-data-polling.service';
import { inject } from '@angular/core';
import { AppConfigService } from './core/app-config.service';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/dashboard/dashboard.component'),
    providers: [provideResolvedPolling()],
  },
  {
    path: 'admin',
    loadComponent: () => import('./pages/admin/admin.component'),
    providers: [
      provideResolvedPolling(),
      { provide: POLLING_INTERVAL, useValue: 3000 },
    ],
  },
  {
    path: 'help',
    loadComponent: () => import('./pages/help/help.component'),
    providers: [
      provideResolvedPolling(),
      { provide: POLLING_INTERVAL, useValue: 10000 },
    ],
  },
];

function provideResolvedPolling() {
  return {
    provide: DataPollingService,
    useFactory: () => {
      const config = inject(AppConfigService).getConfig();
      return config.pollingStrategy === 'default'
        ? new DataPollingService()
        : new AdvancedDataPollingService();
    },
  };
}
