import { InjectionToken } from '@angular/core';

// here place the custom injection tokens
export const POLLING_INTERVAL = new InjectionToken('Polling Interval', {
  providedIn: 'root',
  factory: () => 1000,
});
