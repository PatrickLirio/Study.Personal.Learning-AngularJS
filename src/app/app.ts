import { Component, signal } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header-component/header';
import { UserComponent } from './user/user';
import { DUMMY_USERS } from './user/dummy-users';
import { TasksComponent } from './tasks/tasks';

@Component({
  selector: 'app-root',
  // standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  // protected readonly title = signal('first-patrick-app');
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    // console.log("selected userid " + id);
    this.selectedUserId = id;
  }
}
