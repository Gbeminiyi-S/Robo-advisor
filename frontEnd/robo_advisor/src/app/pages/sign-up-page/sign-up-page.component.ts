import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SignUpService } from '../../services/sign-up/sign-up.service';
import { response } from 'express';
import { error } from 'console';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css',
})
export class SignUpPageComponent {
  isLoading: boolean = false;
  signUpForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
  });

  faEye = faEye;
  faEyeSlash = faEyeSlash;
  isShowPassword: boolean = false;
  isConfirmPassword: boolean = false;

  errorMessage: string = '';
  toggleShowPassword(): void {
    this.isShowPassword = !this.isShowPassword;
  }

  toggleConfirmPassword(): void {
    this.isConfirmPassword = !this.isConfirmPassword;
  }

  constructor(
    private signUpService: SignUpService,
    private router: Router,
  ) {}

  onSubmit(): void {
    this.isLoading = true;
    if (this.signUpForm.valid) {
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
          this.isLoading = false;
          console.log(error);
        },
      );
    } else {
      console.error('Form is invalid');
      this.errorMessage = 'Form is invalid';          
      this.isLoading = false;
    }
  }
}
