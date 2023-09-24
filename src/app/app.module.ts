import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Navbar/navbar.component';
import { PasswordStrengthMeterModule } from './password-strength-meter/password-strength-meter.module';
import { PasswordHistoryComponent } from './password-history/password-history.component'; // Import the module

@NgModule({
  declarations: [AppComponent, NavbarComponent, PasswordHistoryComponent],
  imports: [BrowserModule, PasswordStrengthMeterModule], // Add the module here
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
