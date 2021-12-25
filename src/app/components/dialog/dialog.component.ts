import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
  HostBinding,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'fz-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  host: {
    'aria-labelledby': 'modal-title',
    role: 'dialog',
    'aria-modal': 'true',
  },
})
export class DialogComponent implements OnInit {
  @Input() visible: boolean = false;

  @Output() close = new EventEmitter();

  @HostBinding('class')
  get styleDisplay() {
    return `inset-0 overflow-y-auto ${this.visible ? 'fixed' : 'hidden'}`;
  }

  handleClickOutside() {
    // if (this.visible) {
    // console.log('Emitting');
    this.close.emit();
    // }
  }

  // rootElement: Node;

  constructor(readonly viewRef: ViewContainerRef) {
    // this.rootElement = this.viewRef.element.nativeElement;
    // console.log('Root', this.rootElement);
  }

  ngOnInit(): void {}
}
