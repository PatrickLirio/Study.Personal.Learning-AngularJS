import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from './task/task';
import { DUMMY_TASKS } from './dummy-tasks';
import { NewTaskComponent } from './new-task/new-task';
import { type NewTaskData } from './task/task.model';
import { TasksServices } from './tasks.services';

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

  // private tasksService = new TasksServices();
  constructor(private tasksService: TasksServices) {}

  get selectedUserTask() {
    return this.tasksService.getUserTasks(this.userId);
  }

  // OnCompleteTask(id: string) {
  //   // console.log('clicked ' + id);
  //   return this.tasksService.removeTask(id);
  // }

  OnStartAddTask() {
    // console.log(this.name);
    // this.newTask.emit(this.userId);
    this.isAddingTask = true;
  }

  OnCloseAddTask() {
    this.isAddingTask = false;
  }

  // onAddTask(taskData: NewTaskData) {
  //   // console.log(taskData.title, taskData.summary, taskData.date);

  //   this.isAddingTask = false;
  // }
}
