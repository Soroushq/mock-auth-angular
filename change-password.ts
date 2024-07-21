import { Component } from '@angular/core';
import { MockAuthService } from './services/mock-auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  username: string = '';
  newPassword: string = '';
  success: boolean = false;

  constructor(private authService: MockAuthService) {}

  onChangePassword() {
    this.success = this.authService.changePassword(this.username, this.newPassword);
    if (this.success) {
      console.log('Password changed!');
    } else {
      console.log('Password change not successful!');
    }
  }
}
