import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FormComponent } from './components/form/form.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';

export const routes: Routes = [
  { path: '', title:'home', component: LandingPageComponent },
  { path : 'login', title:'login', component: LoginpageComponent},
  { path : 'sign-up', title:'sign-up', component: SignUpPageComponent },
  { path: 'formspage',title:'user form', component: FormComponent },
];
