import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class DisplayDataService {

  private count: number = 0;
  public subject: Subject<any> = new Subject<any>();

  constructor() { }

  public updateCount(operation: string): void {
    if (operation === 'increment') {
      this.count++;
    } else {
      this.count--;
    }
    this.subject.next({count: this.count, lastOperation: operation});
  }

}
