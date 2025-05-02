import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-login',
  standalone: true,  // Mark as standalone
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, CommonModule], // Ensure FormsModule is imported
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  showPassword: boolean = false;

  constructor(private router: Router) {}

  onLogin() {
    if (this.username === 'admin' && this.password === 'admin') {
      alert('Login successful!');
      this.router.navigate(['/dashboard']); 
    } else {
      alert('Invalid username or password');
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
