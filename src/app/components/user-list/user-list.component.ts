import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import "rxjs/add/operator/map";

import { User } from './../../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  private users: User[] = [];
  private isLoading: boolean = true;
  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('http://jsonplaceholder.typicode.com/users')
      .map((res: Response) => { return res.json() })
      .subscribe((users: User[]) => { 
        this.users = users;
        this.isLoading = false;
      });
  }

}
