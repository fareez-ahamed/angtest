import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.scss'],
})
export class TwoWayBindingComponent implements OnInit {
  @Input() value: number = 0;
  @Output() valueChange = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.valueChange.emit(10);
  }
}
