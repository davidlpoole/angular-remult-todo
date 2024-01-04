import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { remult } from 'remult';
import { Task } from '../../shared/Task';
import { TasksController } from '../../shared/TasksController';
import { fromLiveQuery } from '../from-live-query';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  taskRepo = remult.repo(Task);
  tasks$ = fromLiveQuery(
    this.taskRepo.liveQuery({
      limit: 20,
      orderBy: { createdAt: 'asc' },
    })
  );
  newTaskTitle = '';

  async addTask() {
    try {
      const newTask = await this.taskRepo.insert({ title: this.newTaskTitle });
      // this.tasks.push(newTask);
      this.newTaskTitle = '';
    } catch (error: any) {
      alert(error.message);
    }
  }

  async saveTask(task: Task) {
    try {
      await this.taskRepo.save(task);
    } catch (error: any) {
      alert(error.message);
    }
  }

  async deleteTask(task: Task) {
    await this.taskRepo.delete(task);
    // this.tasks = this.tasks.filter((t) => t !== task);
  }

  async setAllCompleted(completed: boolean) {
    await TasksController.setAllCompleted(completed);
  }
}
