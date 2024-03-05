import { Component } from '@angular/core';
import { AbstractControlOptions, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SignUpService } from '../../services/sign-up/sign-up.service';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css',
})
export class SignUpPageComponent {
  switchIcon1: boolean = true;
  switchIcon2: boolean = true;
  showPassword: boolean = true;
  showConfirmPassword = true;
  isLoading: boolean= false;

  signUpForm: FormGroup = new FormGroup({
    lastname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
    username: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email])
  }, {validators: this.passwordMatchValidator} as AbstractControlOptions);

  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    return password === confirmPassword ? null : {mismatch: true};
  }

  togglePasswordVisibility(field: 'password'): void {
    this.switchIcon1 = !this.switchIcon1;
    
    // Toggle the showPassword only for the specified field
    if (field === 'password') {
        this.showPassword = !this.showPassword;
    }
  }
  toggleConfirmPasswordVisibility(field: 'confirmPassword'): void {
    this.switchIcon2 = !this.switchIcon2;    

    // Toggle the showPassword only for the specified field
    if (field === 'confirmPassword') {
        this.showConfirmPassword = !this.showConfirmPassword;
    }
  }

  errorMessage: string = '';
  
  constructor(
    private signUpService: SignUpService,
    private router: Router,
  ) {}

  clearErrorMessage() {
    this.errorMessage = '';
  }

  onSubmit(): void {
    this.isLoading = true;
    // this.passInput = this.signUpForm.get('password')?.value;
    // this.confirmPassInput = this.signUpForm.get('confirmPassword')?.value;
    
    // if (this.passInput !== this.confirmPassInput) {
    //   this.passError = 'passwords do not match';
    //   this.isLoading=false;
    //   return;
    // }
    if (this.signUpForm.valid) {
      // this.passError = '';
      const signUpData = this.signUpForm.value;
      this.signUpService.signUp(signUpData).subscribe(
        (response) => {
          this.isLoading = false;
          console.log(response.message);
          this.router.navigate(['/login']);
          this.errorMessage = '';
        },
        (error) => {
          this.errorMessage = error.error.message;
          // this.passError = '';
          this.isLoading = false;
          console.log(error);

          setTimeout(() => {
            this.clearErrorMessage();
          }, 5000);
        },
      );
    } else {
      console.error('Form is invalid');
      this.errorMessage = 'Form is invalid';
      // this.passError = '';
      this.isLoading = false;

      setTimeout(() => {
        this.clearErrorMessage();
      }, 5000);
    }  
  }
}
