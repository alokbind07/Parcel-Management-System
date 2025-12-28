import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;
  showAcknowledgment = false;
  title = "RegistrationPage";
  generatedUserID: string | null = null; // To store the generated userID

  constructor(private fb: FormBuilder, private customerService: CustomerService) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(25), Validators.pattern('^[A-Za-z ]*$')]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(30), Validators.pattern('^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.com$')]],
      countrycode: ['+91', Validators.required],
      mobNo: ['', [Validators.required, Validators.pattern('^[1-9][0-9]{9}$')]],
      street: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('^[A-Za-z ]*$')]],
      city: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('^[A-Za-z ]*$')]],
      state: ['', [Validators.required, Validators.maxLength(20), Validators.pattern('^[A-Za-z ]*$')]],
      postal_code: ['', [Validators.required, Validators.pattern('^[0-9]{6}$')]],
      userID: ['', [ Validators.minLength(3), Validators.maxLength(55)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&#])[A-Za-z\\d@$!%*?&#]{6,}$')]],
      cPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]]
    }, {
      validator: this.passwordMatchValidator
    });
  }

  // Custom validator for password and confirm password match
  passwordMatchValidator(form: FormGroup): { [key: string]: boolean } | null {
    const password = form.get('password')?.value;
    const cPassword = form.get('cPassword')?.value;

    if (password && cPassword && password !== cPassword) {
      return { mismatch: true };
    }
    return null;
  }

  // Function to generate a userID using name and random number
  generateRandomUserID(name: string): string {
    const randomNumber = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit number
    return `${name.replace(/\s+/g, '')}${randomNumber}`; // Remove spaces and append random number
  }

  onSubmit(): void {
    if (this.registrationForm && this.registrationForm.valid) {
      const name = this.registrationForm.get('name')?.value;
      const userID = this.generateRandomUserID(name);
      this.registrationForm.patchValue({ userID }); // Set the generated userID in the form
      console.log('Form Submitted', this.registrationForm.value);

      // Send the registration data to the backend
      this.customerService.register(this.registrationForm.value).subscribe(
        response => {
          console.log('Registration successful:', response);
          alert('Registration successful. Your userId is: ' + userID);
          this.generatedUserID = userID; // Show the generated userID
          this.onReset();
        },
        error => {
          console.error('Registration failed:', error);
        }
      );
    } else {
      console.log('Form is invalid');
      this.registrationForm?.markAllAsTouched();
    }
  }

  onReset(): void {
    if (this.registrationForm) {
      this.registrationForm.reset();
    }
  }
}
