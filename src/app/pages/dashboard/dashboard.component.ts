import { Component, inject } from '@angular/core';
import { DataPollingService } from '../../core/data-polling.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { State } from '../../models';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AsyncPipe, DatePipe],
  templateUrl: './dashboard.component.html',
})
export default class DashboardComponent {
  polling = inject(DataPollingService);
  data$ = this.polling.check$;

  state$ = new BehaviorSubject<State>({ title: 'Dashboard Page' });
}
