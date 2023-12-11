import { Injectable, inject } from '@angular/core';
import { interval, map } from 'rxjs';
import { PollingService } from '../models';
import { POLLING_INTERVAL } from '../tokens';

@Injectable({
  providedIn: 'root',
})
export class DataPollingService implements PollingService {
  #interval = inject(POLLING_INTERVAL);
  check$ = interval(this.#interval).pipe(
    map(
      () =>
        ({
          lastUpdate: new Date(),
          pollingStrategy: 'default',
          interval: this.#interval,
          data: {
            /** dummy placeholder */
          },
        } as const)
    )
  );
}
