import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { ComponentsModule } from './components/components.module';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { SlotBoxComponent } from './slot-box/slot-box.component';

@NgModule({
  declarations: [AppComponent, DisplayComponent, DatePickerComponent, TwoWayBindingComponent, SlotBoxComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
