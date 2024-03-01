import { Component } from '@angular/core';
import { FormsModule, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SignUpService } from '../../services/sign-up/sign-up.service';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css',
})
export class SignUpPageComponent {
  switchIcon: boolean = true;
  showPassword: boolean = true;
  // this takes password value
  password: string = '';
  // this stores the confirmation password value
  confirmPassword: string = '';

  isLoading: boolean= false;
  signUpForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
  });

  constructor(private signUpService: SignUpService, private router: Router) {}

  onSubmit(): void {
    this.isLoading=true;
    if (this.signUpForm.valid) {
      const signUpData = this.signUpForm.value;
      this.signUpService.signUp(signUpData).subscribe(
        (response) => {
          this.isLoading=false;
          console.log(response.message);
          this.router.navigate(['/login'])
        },
        (error) => {
          this.isLoading=false;
          console.log(error);
        },
        );
      } else {
        console.error('Form is invalid');
        this.isLoading=false;
    }
  }

  togglePasswordVisibility(field: 'password' | 'confirmPassword'): void {
    this.switchIcon = !this.switchIcon;    

    // Toggle the showPassword only for the specified field
    if (field === 'password') {
        this.showPassword = !this.showPassword;
    }
}

  // to see if the passwords match...
  confirmPasswordMatch(): boolean {
    return this.password === this.confirmPassword;
  }
} 