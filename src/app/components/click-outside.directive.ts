import {
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';

@Directive({
  selector: '[click-outside]',
})
export class ClickOutsideDirective implements OnInit, OnDestroy {
  @Output('click-outside')
  clickOutside = new EventEmitter();

  @Input('parent') parent: Node = document;

  listener!: (e: Event) => void;

  constructor(private elRef: ElementRef<HTMLElement>) {}

  ngOnDestroy(): void {
    this.parent.removeEventListener('click', this.listener);
  }

  ngOnInit(): void {
    console.log('Parent', this.parent);
    this.listener = (event) => {
      if (!this.elRef.nativeElement.contains(event.target as Node)) {
        this.clickOutside.emit();
      }
    };
    this.parent.addEventListener('click', this.listener);
  }
}
