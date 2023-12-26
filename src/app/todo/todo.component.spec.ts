import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { TodoComponent } from './todo.component';
import { Task } from '../../../shared/Task';
import { By } from '@angular/platform-browser';

describe('TodoComponent', () => {
  let component: TodoComponent;
  let fixture: ComponentFixture<TodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Todo');
  });

  it('should render a todo', () => {
    component.tasks = [{ id: 'abc', title: 'wash dog', completed: false }];
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.getElementsByClassName('todo')[0]?.textContent).toContain(
      'wash dog'
    );
  });

  // it('should add a task when the form is submitted', async () => {
  //   // Arrange
  //   component.newTaskTitle = 'Task 1';

  //   // Act
  //   await component.addTask();
  //   console.log(component.tasks);

  //   // Assert
  //   expect(component.tasks.length).toBe(1);
  // });
});
