import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from './button.directive';
import { ClickOutsideDirective } from './click-outside.directive';

@NgModule({
  declarations: [ButtonDirective, ClickOutsideDirective],
  imports: [CommonModule],
  exports: [ButtonDirective, ClickOutsideDirective],
})
export class ComponentsModule {}
