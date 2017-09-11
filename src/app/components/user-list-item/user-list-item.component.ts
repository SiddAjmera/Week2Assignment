import { Component, Input, OnInit } from '@angular/core';

import { User } from './../../models/user';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.css']
})
export class UserListItemComponent implements OnInit {

  @Input() private user: User;
  private random: number = Math.floor(Math.random() * 4);

  constructor() { }

  ngOnInit() {
  }

}