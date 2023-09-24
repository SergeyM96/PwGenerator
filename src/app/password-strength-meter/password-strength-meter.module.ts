import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Add this import

import { PasswordStrengthMeterComponent } from './password-strength-meter.component';

@NgModule({
  declarations: [PasswordStrengthMeterComponent],
  imports: [CommonModule], // Add CommonModule here
  exports: [PasswordStrengthMeterComponent],
})
export class PasswordStrengthMeterModule {}
