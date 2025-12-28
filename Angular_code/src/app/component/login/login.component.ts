import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Initialize the form group with validation
    this.loginForm = this.fb.group({
      userID: ['', [Validators.required,]],
      password: ['', [Validators.required,]]
    });
  }

  // Function to call login service
  onSubmit(): void {
    if (this.loginForm.valid) {
      const { userID, password } = this.loginForm.value;
      // Call login method from LoginService
      this.loginService.login(userID, password).subscribe(
        (response) => {
          console.log('Login response:', response); // Log the response for debugging
          if (response !== null) {
            sessionStorage.setItem('user', JSON.stringify(response)); // Store the full user data including role
            const user = JSON.parse(sessionStorage.getItem('user') || '{}');
            // Check the user's role and navigate accordingly
            if (response.role === 'admin') {
              this.router.navigate(['/adminHome']); // Redirect to Admin home page
            } else if (response.role === 'customer') {
              this.router.navigate(['/customerHome']); // Redirect to Customer home page
            } else {
              this.errorMessage = 'Invalid role!';
              alert("Invalid Credentials");
            }
          } else {
            this.errorMessage = 'Login failed! Please check your credentials.';
          }
        },
        (error) => {
          console.error('Login error:', error);
          this.errorMessage = 'Login failed! Please check your credentials.';
        }
      );
    } else {
      this.errorMessage = 'Please fill in all fields correctly.';
    }
  }  
}

