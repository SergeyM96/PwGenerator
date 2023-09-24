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
  passwordHistory: string[] = []; // Added password history array

  // Define the isGenerateEnabled method
  isGenerateEnabled(): boolean {
    return (
      this.length >= 6 &&
      (this.includeLetters || this.includeNumbers || this.includeSymbols)
    );
  }

  // Modify the 'modifyLength' method to handle event properly
  modifyLength(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
      if (this.length < 6) {
        alert('Please enter a length higher than 5.');
      }
    }
  }

  // Define the 'modifyLetters' method
  modifyLetters() {
    this.includeLetters = !this.includeLetters;
  }

  // Define the 'modifyNumbers' method
  modifyNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  // Define the 'modifySymbols' method
  modifySymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  // Modify the 'buttonClick' method to handle password generation
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

      // Add the generated password to the history
      this.passwordHistory.unshift(this.password);

      // Limit the history to a certain number of passwords (e.g., 10)
      if (this.passwordHistory.length > 10) {
        this.passwordHistory.pop();
      }
    } else {
      alert(
        'Please enter a length higher than 5 and select at least one option.'
      );
      this.password = ''; // Clear the password field if conditions are not met
    }
  }
}
