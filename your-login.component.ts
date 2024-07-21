import { Component } from '@angular/core';
import { MockAuthService } from './services/mock-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  user: any = null;

  constructor(private authService: MockAuthService) {}

  onLogin() {
    this.user = this.authService.login(this.username, this.password);
    if (this.user) {
      console.log('Login successful!', this.user);
    } else {
      console.log('Login failed!');
    }
  }
}
