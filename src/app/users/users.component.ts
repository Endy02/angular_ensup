import { Component } from '@angular/core';
import { USERS } from '../mock-users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
})

export class UsersComponent {
    users = USERS;
}
