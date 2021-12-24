import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [AppComponent, DisplayComponent, DatePickerComponent],
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
