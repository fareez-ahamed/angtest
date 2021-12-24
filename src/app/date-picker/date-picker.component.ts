import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
  constructor() {}

  @Input()
  date: Date = new Date();

  @Output()
  change = new EventEmitter<Date>();

  ngOnInit(): void {}
}
