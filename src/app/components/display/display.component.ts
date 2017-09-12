import { DisplayDataService } from './../../services/display-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  public count: number = 0;
  public lastOperation: string = 'None';

  constructor(private displayDataService: DisplayDataService) { }

  ngOnInit() {
    this.displayDataService.subject
    .subscribe((data) => {
      this.count = data.count;
      this.lastOperation = data.lastOperation;
    });
  }

}
