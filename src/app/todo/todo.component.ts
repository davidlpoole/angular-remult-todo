import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { remult } from 'remult';
import { Task } from '../../../shared/Task';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  taskRepo = remult.repo(Task);
  tasks: Task[] = [];
  ngOnInit() {
    this.taskRepo.find().then((items) => (this.tasks = items));
  }
}
