import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  profile = {
    name: 'Juan Dela Cruz',
    email: 'juan@example.com',
    phone: '09123456789',
    address: 'Barangay Example, City'
  };

  constructor(private router: Router) {}

  saveProfile() {
    alert('Profile saved successfully!');
    // Additional save logic can go here
  }

  logout() {
    // Clear local/session storage if needed
    // localStorage.clear(); or sessionStorage.clear();
    alert('You have been logged out.');
    this.router.navigate(['/login']); // Change to your actual login or home route
  }
}
