import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: any[] = [];

  constructor() { }

  register(user: any): boolean {
    if (this.users.some(u => u.username === user.username)) {
      return false;
    }
    this.users.push(user);
    console.log('Registered Users:', this.users);
    return true;
  }

  login(username: string, password: string): boolean {
    return this.users.some(u => u.username === username && u.password === password);
  }
}