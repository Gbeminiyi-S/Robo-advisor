import { Component } from '@angular/core';
import { Validators , FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/login/login.service';
import { UserDetailsService } from '../../services/user-details/user-details.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
    CommonModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css',
})
export class LoginpageComponent {
  switchIcon: boolean = true;
  showPassword: boolean = true;
  isLoading: boolean = false;
  errorMessage: string = '';

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });
  // loginForm: FormGroup = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  // });

  togglePasswordVisibility(): void {
    this.switchIcon = !this.switchIcon
    this.showPassword = !this.showPassword
}

  clearErrorMessage() {
  this.errorMessage = '';
  }

  constructor(
    private loginService: LoginService,
    private router: Router,
    private userDetails: UserDetailsService,
  ) {}

  onSubmit(): void {
    this.isLoading = true;
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      this.loginService.login(loginData).subscribe(
        (response) => {
          this.isLoading = false;
          this.userDetails.setUsername(response.username);
          this.router.navigate(['/homepage']);
          this.errorMessage = '';
          console.log(response);
        },
        (error) => {
          this.errorMessage = error.error.message;
          console.log(error);
          this.isLoading = false;

          setTimeout(() => {
            this.clearErrorMessage();
          }, 3000);
        },
      );
    } else {
      this.isLoading = false;
      console.log('Invalid form');
      this.errorMessage='Invalid form';

      setTimeout(() => {
        this.clearErrorMessage();
      }, 3000);
    }
  }
}
