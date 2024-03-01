import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [RouterLinkActive, RouterLink, CommonModule, FormsModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css',
})
export class LoginpageComponent {
  switchIcon: boolean = true;
  showPassword: boolean = true;
  // this takes password value
  password: string = '';


  togglePasswordVisibility(): void {
    this.switchIcon = !this.switchIcon
    this.showPassword = !this.showPassword
    
    // Toggle the showPassword only for the specified field
    // if (field === 'password') {
    //     this.showPassword = !this.showPassword;
    // }
}

}
