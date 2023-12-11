import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface State {
  title?: string;
}

@Injectable({
  providedIn: 'root',
})
export class StateService {
  state = new BehaviorSubject<State>({});

  state$ = this.state.asObservable();

  setState(state: State) {
    this.state.next(state);
  }
}
