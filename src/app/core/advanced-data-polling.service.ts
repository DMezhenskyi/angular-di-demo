import { Injectable, inject } from '@angular/core';
import { map, timer } from 'rxjs';
import { PollingService } from '../models';
import { POLLING_INTERVAL } from '../tokens';

@Injectable({
  providedIn: 'root',
})
export class AdvancedDataPollingService implements PollingService {
  #interval = inject(POLLING_INTERVAL);
  check$ = timer(0, this.#interval).pipe(
    map(
      () =>
        ({
          lastUpdate: new Date(),
          pollingStrategy: 'advanced',
          interval: this.#interval,
          data: {
            /** dummy placeholder */
          },
        } as const)
    )
  );
}
