import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from './button.directive';
import { ClickOutsideDirective } from './click-outside.directive';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [ButtonDirective, ClickOutsideDirective, DialogComponent],
  imports: [CommonModule],
  exports: [ButtonDirective, ClickOutsideDirective, DialogComponent],
})
export class ComponentsModule {}
