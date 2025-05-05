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
    if (this.formData.password !== this.formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Handle successful registration logic
    console.log('User registered:', this.formData);
    this.router.navigate(['/login']);
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}

