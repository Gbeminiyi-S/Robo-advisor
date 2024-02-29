import { HomepageComponent } from './components/homepage/homepage.component';
import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FormComponent } from './components/form/form.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';

export const routes: Routes = [
  { path: '', title:'Landing Page', component: LandingPageComponent },
  { path : 'login', title:'Log-in Page', component: LoginpageComponent},
  { path : 'signup', title:'Sign-up Page', component: SignUpPageComponent },
  { path: 'formspage',title:'User form', component: FormComponent },
  { path: 'homepage',title:'Homepage', component: HomepageComponent },
];
