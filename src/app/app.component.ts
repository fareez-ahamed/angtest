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

  showDialog = false;

  currDate = new Date();

  @ViewChildren('inputRef')
  inputs!: QueryList<ElementRef<HTMLInputElement>>;

  ngAfterViewInit(): void {
    console.log(this.inputs);
  }

  handleClick() {
    console.log('Clicked Outside');
  }

  hideDialog() {
    this.showDialog = false;
  }

  makeFocus() {
    this.inputs.forEach((inputEl, i) => {
      inputEl.nativeElement.value = `${i + 1}`;
    });
  }
}
