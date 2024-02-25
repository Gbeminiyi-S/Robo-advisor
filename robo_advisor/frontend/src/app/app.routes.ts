import { Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FormComponent } from './components/form/form.component';

export const routes: Routes = [
  { path: '', title:'home', component: LandingPageComponent },
  { path: 'formspage',title:'user form', component: FormComponent },
];
