import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule,  FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/login/login.service';
import { response } from 'express';
import { error } from 'console';
import { UserDetailsService } from '../../services/user-details/user-details.service';


@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [RouterLinkActive, RouterLink, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css',
})
export class LoginpageComponent {
  switchIcon: boolean = true;
  showPassword: boolean = true;
  isLoading: boolean = false;
  // this takes password value
  password: string = '';

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });


  togglePasswordVisibility(): void {
    this.switchIcon = !this.switchIcon
    this.showPassword = !this.showPassword
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
