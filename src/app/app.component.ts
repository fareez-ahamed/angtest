import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'angtest';

  val = 20;

  showDialog = false;

  currDate = new Date();

  @ViewChildren('inputRef')
  inputs!: QueryList<ElementRef<HTMLInputElement>>;

  ngAfterViewInit(): void {}

  handleClick() {}

  hideDialog() {
    this.showDialog = false;
  }

  makeFocus() {
    this.inputs.forEach((inputEl, i) => {
      inputEl.nativeElement.value = `${i + 1}`;
    });
  }
}
