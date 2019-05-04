import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  users$: Observable<User[]>;

  constructor(private usersSvc: UsersService) {
    this.users$ = usersSvc.findAll();
  }

  ngOnInit() {
  }

}
