import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, map } from 'rxjs';

@Injectable()
export class DisplayObject {
  count = new BehaviorSubject(0);
  constructor() {}

  startTimer(frequency = 1000) {
    interval(frequency).subscribe((i) => {
      this.count.next(i);
    });
  }

  get multipliedCount() {
    return this.count.pipe(map((x) => x * 2));
  }
}
