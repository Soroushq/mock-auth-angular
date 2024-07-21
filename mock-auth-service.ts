import { Injectable } from '@angular/core';
import { mockUsers } from './mock-users';

@Injectable({
  providedIn: 'root'
})
export class MockAuthService {

  constructor() {}

  login(username: string, password: string) {
    const user = mockUsers.find(user => user.username === username && user.password === password);
    return user ? user : null; // if the credentials match then return the user object, otherwise return null
  }

  changePassword(username: string, newPassword: string): boolean {
    const user = mockUsers.find(user => user.username === username);
    if (user) {
      user.password = newPassword;
      return true;
    }
    return false;
  }
}
