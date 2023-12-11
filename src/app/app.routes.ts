import { Routes } from '@angular/router';
import { POLLING_INTERVAL } from './tokens';
import { DataPollingService } from './core/data-polling.service';
import { AdvancedDataPollingService } from './core/advanced-data-polling.service';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/dashboard/dashboard.component'),
  },
  {
    path: 'admin',
    loadComponent: () => import('./pages/admin/admin.component'),
    providers: [
      {
        provide: DataPollingService,
        useClass: AdvancedDataPollingService,
      },
      { provide: POLLING_INTERVAL, useValue: 3000 },
    ],
  },
  {
    path: 'help',
    loadComponent: () => import('./pages/help/help.component'),
    providers: [
      DataPollingService,
      { provide: POLLING_INTERVAL, useValue: 10000 },
    ],
  },
];
