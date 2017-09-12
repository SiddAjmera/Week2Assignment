import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';

import { User } from './../../models/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  private currentUser: User;
  private random: number;
  private mapUrl: string;
  private isLoading: boolean = true;

  constructor(private activatedRoute: ActivatedRoute, private http: Http, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      let currentUserId: string = params['id'];
      this.http.get('http://jsonplaceholder.typicode.com/users/' + currentUserId)
        .map((response: Response) => { return response.json(); })
        .subscribe((user: User) => {
          this.currentUser = user;
          this.random = Math.floor(Math.random() * 3)
          this.mapUrl = 'http://maps.google.com/maps?q=' + this.currentUser.address.geo.lng + ', ' + this.currentUser.address.geo.lat + '&z=15&output=embed';
          this.isLoading = false;
        });
    });
  }

  mapURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.mapUrl);
  }

}