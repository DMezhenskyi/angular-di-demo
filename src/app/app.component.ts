import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { BehaviorSubject } from 'rxjs';
import { State } from './models';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    AsyncPipe,
  ],
  template: `
    <mat-toolbar class="toolbar" color="primary">
      <span>{{ (state$ | async)?.title }}</span>
      <nav>
        <a
          mat-stroked-button
          [routerLinkActiveOptions]="{ exact: true }"
          routerLink=""
          routerLinkActive="active"
          >Dashboard</a
        >
        <a
          mat-stroked-button
          [routerLinkActiveOptions]="{ exact: true }"
          routerLink="/admin"
          routerLinkActive="active"
          >Admin</a
        >
        <a
          mat-stroked-button
          [routerLinkActiveOptions]="{ exact: true }"
          routerLink="/help"
          routerLinkActive="active"
          >Help</a
        >
      </nav>
    </mat-toolbar>
    <main class="content mat-elevation-z1">
      <router-outlet />
    </main>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  state$ = new BehaviorSubject<State>({ title: 'Angular DI Demo' });
}
