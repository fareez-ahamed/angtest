import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { DisplayComponent } from './display/display.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'angtest';

  currDate = new Date();

  @ViewChildren('inputRef')
  inputs!: QueryList<ElementRef<HTMLInputElement>>;

  ngAfterViewInit(): void {
    console.log(this.inputs);
  }

  makeFocus() {
    this.inputs.forEach((inputEl, i) => {
      inputEl.nativeElement.value = `${i + 1}`;
    });
  }
}
