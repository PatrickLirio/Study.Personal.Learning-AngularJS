import { Component, inject, Input } from '@angular/core';

import { Task } from './task.model';
import { CardComponent } from '../../shared/card/card';
import { DatePipe } from '@angular/common';
import { TasksServices } from '../tasks.services';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  // @Output() complete = new EventEmitter();
  private taskService = inject(TasksServices);

  OnCompleteTask() {
    // console.log(this.task.id);
    // this.complete.emit(this.task.id);
    this.taskService.removeTask(this.task.id);
  }
}
