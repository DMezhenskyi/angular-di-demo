import { Component, inject } from '@angular/core';
import { DataPollingService } from '../../core/data-polling.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { State } from '../../models';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [AsyncPipe, DatePipe],
  templateUrl: './help.component.html',
})
export default class HelpComponent {
  polling = inject(DataPollingService);
  data$ = this.polling.check$;

  state$ = new BehaviorSubject<State>({ title: 'Help Page' });
}
