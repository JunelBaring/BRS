import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [CommonModule]
})
export class DashboardComponent {

  constructor(private router: Router) {}

  logout() {
    // Remove login/session data
    localStorage.removeItem('isLoggedIn'); // or token if used

    // Optionally show a message
    alert('You have been logged out.');

    // Redirect to login page
    this.router.navigate(['/login']);
  }
}
