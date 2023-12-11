import { Injectable } from '@angular/core';
import { map, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdvancedDataPollingService {
  #interval = 1000;
  check$ = timer(0, this.#interval).pipe(
    map(() => ({
      lastUpdate: new Date(),
      pollingStrategy: 'advanced',
      interval: this.#interval,
      data: { /** dummy placeholder */ }
    }))
  )
}
