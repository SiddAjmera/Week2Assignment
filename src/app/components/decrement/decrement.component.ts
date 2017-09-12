import { DisplayDataService } from './../../services/display-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decrement',
  templateUrl: './decrement.component.html',
  styleUrls: ['./decrement.component.css']
})
export class DecrementComponent implements OnInit {

  constructor(private displayDataService: DisplayDataService) { }

  ngOnInit() {
  }

  public decermentCount() {
    this.displayDataService.updateCount('decrement');
  }

}
