import { Component, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { remult } from 'remult';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-remult-todo';
  constructor(zone: NgZone) {
    remult.apiClient.wrapMessageHandling = (handler) =>
      zone.run(() => handler());
  }
}
