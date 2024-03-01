import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { UserDetailsService } from '../../services/user-details/user-details.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css',
})
export class LoginpageComponent {
  isLoading: boolean = false;
  isShowPassword: boolean = false;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  faEyeSlash = faEyeSlash;
  faEye = faEye;

  toggleShowPassword(): void {
    this.isShowPassword = !this.isShowPassword;
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
          console.log(response);
        },
        (error) => {
          console.log(error);
          this.isLoading = false;
        },
      );
    } else {
      this.isLoading = false;
      console.log('Invalid form');
    }
  }
}
