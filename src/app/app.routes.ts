import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/dashboard/dashboard.component') },
  { path: 'admin', loadComponent: () => import('./pages/admin/admin.component') },
  { path: 'help', loadComponent: () => import('./pages/help/help.component') },
];
