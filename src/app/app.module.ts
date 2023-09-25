import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PasswordStrengthMeterModule } from './password-strength-meter/password-strength-meter.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [BrowserModule, PasswordStrengthMeterModule], // Add the module here
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
