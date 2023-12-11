import { Component, inject } from '@angular/core';
import { DataPollingService } from '../../core/data-polling.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { State } from '../../models';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [AsyncPipe, DatePipe],
  templateUrl: './admin.component.html',
})
export default class AdminComponent {
  polling = inject(DataPollingService);
  data$ = this.polling.check$;

  state$ = new BehaviorSubject<State>({ title: 'Admin Page' });
}
