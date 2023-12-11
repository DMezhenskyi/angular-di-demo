import { Component, inject } from '@angular/core';
import { DataPollingService } from '../../core/data-polling.service';
import { AsyncPipe, DatePipe } from '@angular/common';
import { StateService } from '../../core/state.service';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [AsyncPipe, DatePipe],
  templateUrl: './help.component.html',
  providers: [StateService],
})
export default class HelpComponent {
  polling = inject(DataPollingService);
  data$ = this.polling.check$;

  stateService = inject(StateService, { self: true });
  state$ = this.stateService.state$;

  ngOnInit() {
    this.stateService.setState({ title: 'Help Page' });
  }
}
