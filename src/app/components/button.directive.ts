import { Directive, HostBinding, Input, OnInit } from '@angular/core';

type Variant = 'primary' | 'secondary' | 'outline';
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

@Directive({
  selector: '[fzBtn]',
})
export class ButtonDirective {
  @Input() variant: Variant = 'primary';
  @Input() size: Size = 'md';
  @Input() rounded: boolean = false;

  private classMap: Record<Variant, string> = {
    primary:
      'border border-transparent text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm',
    secondary:
      'border border-transparent text-indigo-700 bg-indigo-100 hover:bg-indigo-200',
    outline:
      'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 shadow-sm',
  };

  private paddingMapNormal: Record<Size, string> = {
    xs: 'px-2.5 py-1.5',
    sm: 'px-3 py-2',
    md: 'px-4 py-2',
    lg: 'px-4 py-2',
    xl: 'px-6 py-3',
  };
  private paddingMapRounded: Record<Size, string> = {
    xs: 'px-3 py-1.5',
    sm: 'px-3.5 py-2',
    md: 'px-4 py-2',
    lg: 'px-5 py-2',
    xl: 'px-6 py-3',
  };

  private fontSizeMap: Record<Size, string> = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-base',
  };

  @HostBinding('class')
  get elementClass() {
    return `inline-flex items-center font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-50 ${
      this.classMap[this.variant]
    } ${this.fontSizeMap[this.size]} ${
      this.rounded
        ? this.paddingMapRounded[this.size]
        : this.paddingMapNormal[this.size]
    } ${this.rounded ? 'rounded-full' : 'rounded-md'}`;
  }

  constructor() {}
}
