import { Component, inject } from '@angular/core';
import { DataPollingService } from '../../core/data-polling.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { StateService } from '../../core/state.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [AsyncPipe, DatePipe],
  templateUrl: './admin.component.html',
  providers: [StateService],
})
export default class AdminComponent {
  polling = inject(DataPollingService);
  data$ = this.polling.check$;

  stateService = inject(StateService);
  state$ = this.stateService.state$;

  ngOnInit() {
    this.stateService.setState({ title: 'Admin Page' });
  }
}
