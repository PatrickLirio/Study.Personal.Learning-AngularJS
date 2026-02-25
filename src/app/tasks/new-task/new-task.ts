import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
// interface NewTaskData {
//   enteredTitle: string;
//   enteredSummary: string;
//   enteredDate: string;
// }
@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTaskComponent {
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    // (console.log('sample' + this.enteredTitle), console.log(this.enteredSummary));
    // console.log(this.enteredDate);
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    });
  }
}
