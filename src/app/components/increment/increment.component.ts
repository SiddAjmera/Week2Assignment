import { DisplayDataService } from './../../services/display-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css']
})
export class IncrementComponent implements OnInit {

  constructor(private displayDataService: DisplayDataService) { }

  ngOnInit() {
  }

  public incrementCount() {
    this.displayDataService.updateCount('increment');
  }

}
