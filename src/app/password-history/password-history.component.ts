// password-history.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-password-history',
  templateUrl: './password-history.component.html',
  styleUrls: ['./password-history.component.css'],
})
export class PasswordHistoryComponent {
  @Input() passwordHistory: string[] = [];
}
