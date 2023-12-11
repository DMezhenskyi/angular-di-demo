import { Component, inject } from '@angular/core';
import { DataPollingService } from '../../core/data-polling.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { StateService } from '../../core/state.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AsyncPipe, DatePipe],
  templateUrl: './dashboard.component.html',
  providers: [StateService],
})
export default class DashboardComponent {
  polling = inject(DataPollingService);
  data$ = this.polling.check$;

  stateService = inject(StateService, { self: true });
  state$ = this.stateService.state$;

  ngOnInit() {
    this.stateService.setState({ title: 'Dashboard Page' });
  }
}
