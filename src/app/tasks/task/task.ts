import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;

  @Output() complete = new EventEmitter();

  OnCompleteTask() {
    console.log(this.task.id);
    this.complete.emit(this.task.id);
  }
}
