import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-register',
  standalone: true,  // Mark as standalone
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [FormsModule, CommonModule], // Ensure FormsModule is imported
})
export class RegisterComponent {
  formData = {
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    contactNumber: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    // Simulate registration process
    alert('Registration successful!');
    this.router.navigate(['/login']);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}