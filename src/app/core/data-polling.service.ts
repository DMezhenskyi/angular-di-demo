import { Injectable, inject } from '@angular/core';
import { interval, map } from 'rxjs';
import { POLLING_INTERVAL } from '../tokens';
import { PollingService } from '../models';

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
