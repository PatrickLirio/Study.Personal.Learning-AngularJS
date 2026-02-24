import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task';
import { DUMMY_TASKS } from './dummy-tasks';
import { NewTaskComponent } from './new-task/new-task';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
  imports: [TaskComponent, NewTaskComponent],
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  dummyTasks = DUMMY_TASKS;

  isAddingTask: boolean = false;
  @Output() newTask = new EventEmitter();

  get selectedUserTask() {
    return this.dummyTasks.filter((task) => task.userId === this.userId);
  }

  OnCompleteTask(id: string) {
    this.dummyTasks = this.dummyTasks.filter((task) => task.id !== id);
  }

  OnStartAddTask() {
    // console.log(this.name);
    // this.newTask.emit(this.userId);
    this.isAddingTask = true;
  }

  OnCancelAddTask() {
    this.isAddingTask = false;
  }
}
