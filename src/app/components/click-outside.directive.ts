import {
  Directive,
  ElementRef,
  OnDestroy,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Directive({
  selector: '[click-outside]',
})
export class ClickOutsideDirective implements OnInit, OnDestroy {
  @Output('click-outside')
  clickOutside = new EventEmitter();

  listener!: (e: Event) => void;

  constructor(private elRef: ElementRef<HTMLElement>) {}

  ngOnDestroy(): void {
    document.removeEventListener('click', this.listener);
  }

  ngOnInit(): void {
    this.listener = (event) => {
      if (!this.elRef.nativeElement.contains(event.target as Node)) {
        this.clickOutside.emit();
      }
    };
    document.addEventListener('click', this.listener);
  }
}
