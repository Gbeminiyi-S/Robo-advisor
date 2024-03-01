import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sign-up-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, FormsModule],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.css'
})
export class SignUpPageComponent {
  switchIcon: boolean = true;
  showPassword: boolean = true;
  // this takes password value
  password: string = '';
  // this stores the confirmation password value
  confirmPassword: string = '';

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