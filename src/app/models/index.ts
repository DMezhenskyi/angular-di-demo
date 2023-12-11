// this is an interface which describes data

import { assertInInjectionContext, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from '../core/state.service';

// that returns http://localhost:3000/resolveAppConfig
export interface AppConfig {
  pollingStrategy: 'default' | 'advanced';
  defaultInterval: number;
}

export interface PollingService {
  check$: Observable<{
    lastUpdate: Date;
    pollingStrategy: AppConfig['pollingStrategy'];
    interval: number;
    data: any;
  }>;
}

export interface State {
  title?: string;
}

// export function withState(initialState: State) {
//   assertInInjectionContext(withState);
//   const stateService = inject(StateService);
//   stateService.setState(initialState);
//   return stateService.state$;
// }
