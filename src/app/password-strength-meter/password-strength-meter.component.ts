import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-strength-meter',
  template: `
    <ng-container *ngIf="password">
      <div class="password-strength">
        <!-- Display the password strength level -->
        Password Strength:
        <span [ngClass]="calculateStrengthClass()">{{
          calculateStrength()
        }}</span>
        <!-- Password Strength Criteria -->
        <!-- Weak: Minimum 6 characters -->
        <!-- Moderate: Minimum 8 characters, mix of letters and numbers -->
        <!-- Strong: Minimum 12 characters, mix of letters, numbers, and symbols -->
      </div>
    </ng-container>
  `,
  styleUrls: ['./password-strength-meter.component.css'],
})
export class PasswordStrengthMeterComponent {
  @Input() password: string = '';

  // Function to calculate the CSS class for displaying password strength
  calculateStrengthClass(): string {
    const strength = this.calculateStrengthPercentage();

    // Determine the strength level and return corresponding CSS class
    if (strength >= 90) {
      return 'strong'; // Display as Strong when strength is 90% or higher
    } else if (strength >= 70) {
      return 'moderate'; // Display as Moderate when strength is between 70% and 89%
    } else {
      return 'weak'; // Display as Weak when strength is below 70%
    }
  }

  // Function to calculate the password strength level
  calculateStrength(): string {
    const strength = this.calculateStrengthPercentage();

    // Determine the strength level and return corresponding text
    if (strength >= 90) {
      return 'Strong'; // Password is Strong when strength is 90% or higher
    } else if (strength >= 70) {
      return 'Moderate'; // Password is Moderate when strength is between 70% and 89%
    } else {
      return 'Weak'; // Password is Weak when strength is below 70%
    }
  }

  // Function to calculate the password strength percentage
  calculateStrengthPercentage(): number {
    // Define flags to track the presence of numbers, capital letters, small letters, and symbols
    let hasNumbers = false;
    let hasCapitalLetters = false;
    let hasSmallLetters = false;
    let hasSymbols = false;

    // Loop through each character in the password
    for (const char of this.password) {
      if (/[0-9]/.test(char)) {
        hasNumbers = true;
      } else if (/[A-Z]/.test(char)) {
        hasCapitalLetters = true;
      } else if (/[a-z]/.test(char)) {
        hasSmallLetters = true;
      } else if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(char)) {
        hasSymbols = true;
      }
    }

    // Count the number of symbol characters in the password
    const symbolCount = (
      this.password.match(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/g) || []
    ).length;

    // Calculate the strength based on the flags and symbol count

    // Password is Strong when it contains letters, numbers, and symbols
    if (hasNumbers && hasCapitalLetters && hasSmallLetters && hasSymbols) {
      return 100;
    }
    // Password is Strong when it contains numbers, letters, and symbols
    else if (
      hasNumbers &&
      (hasCapitalLetters || hasSmallLetters) &&
      hasSymbols
    ) {
      return 90;
    }
    // Password is Moderate when it contains mixed letters and numbers or mixed letters and symbols
    else if (
      (hasNumbers && (hasCapitalLetters || hasSmallLetters)) ||
      ((hasCapitalLetters || hasSmallLetters) && hasSymbols)
    ) {
      return 70;
    }
    // Password is Weak when it contains only one of: letters, numbers, or symbols
    else if (hasNumbers || hasCapitalLetters || hasSmallLetters) {
      return 40;
    }
    // Password is Very Weak when it has no characters
    else {
      return 0;
    }
  }
}
