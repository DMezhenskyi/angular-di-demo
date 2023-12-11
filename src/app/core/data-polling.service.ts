import { Injectable } from '@angular/core';
import { interval, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataPollingService {
  #interval = 1000;
  check$ = interval(this.#interval).pipe(
    map(() => ({
      lastUpdate: new Date(),
      pollingStrategy: 'default',
      interval: this.#interval,
      data: { /** dummy placeholder */ }
    }))
  )
}
