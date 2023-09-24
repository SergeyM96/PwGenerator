import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'randomPassword';
  includeLetters: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;
  length: number = 0;
  password: string = '';

  // Define the isGenerateEnabled method
  isGenerateEnabled(): boolean {
    return (
      this.length >= 6 &&
      (this.includeLetters || this.includeNumbers || this.includeSymbols)
    );
  }

  modifyLength(value: string) {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
      if (this.length < 6) {
        alert('Please enter a length higher than 5.');
      }
    }
  }

  modifyLetters() {
    this.includeLetters = !this.includeLetters;
  }

  modifyNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  modifySymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  buttonClick() {
    if (this.isGenerateEnabled()) {
      const numbers = '1234567890';
      const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const symbols = '!^+%&/()${}?';

      let validChars = '';

      if (this.includeLetters) {
        validChars += letters;
      }

      if (this.includeNumbers) {
        validChars += numbers;
      }

      if (this.includeSymbols) {
        validChars += symbols;
      }

      let generatedPassword = '';

      for (let i = 0; i < this.length; i++) {
        const index = Math.floor(Math.random() * validChars.length);
        generatedPassword += validChars[index];
      }

      this.password = generatedPassword;
    } else {
      alert(
        'Please enter a length higher than 5 and select at least one option.'
      );
      this.password = ''; // Clear the password field if conditions are not met
    }
  }
}
