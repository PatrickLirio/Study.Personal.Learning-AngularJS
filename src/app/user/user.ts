import { Component, EventEmitter, Input, Output, input, computed, output } from '@angular/core';

import { type User } from './user.model';
import { CardComponent } from '../shared/card/card';
// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.html',
  styleUrl: './user.css',
  imports: [CardComponent],
})
export class UserComponent {
  // @Input({required: true}) id!: string;
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;
  // @Input({ required: true }) user!: {
  //   id: string;
  //   avatar: string;
  //   name: string;
  // };

  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  // select = output<string>();
  // avatar = input.required<string>();
  // name = input.required<string>()

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  // imagePath = computed(() => {
  //   'assets/users/' + this.avatar
  // })

  onSelectUser() {
    // console.log(this.user.name);
    // console.log(this.user.id);
    this.select.emit(this.user.id);
  }
}
