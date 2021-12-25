import {
  Component,
  ElementRef,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-slot-box',
  templateUrl: './slot-box.component.html',
  styleUrls: ['./slot-box.component.scss'],
})
export class SlotBoxComponent implements OnInit {
  @Input('header')
  header!: TemplateRef<any>;

  @Input('footer')
  footer!: TemplateRef<any>;

  arr = [1, 2, 3, 4];

  constructor() {}

  ngOnInit(): void {}
}
