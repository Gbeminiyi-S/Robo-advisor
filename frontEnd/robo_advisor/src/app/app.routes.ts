import { Routes } from '@angular/router';
import { FormComponent } from './pages/form/form.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { Error404Component } from './pages/error404/error404.component';
import { AgreementComponent } from './pages/agreement/agreement.component';
import { FAQPageComponent } from './pages/faq-page/faq-page.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { DashboardNavbarComponent } from './components/dashboard-navbar/dashboard-navbar.component';

export const routes: Routes = [
  { path: '', title: 'Landing Page', component: LandingPageComponent },
  { path: 'login', title: 'Log-in Page', component: LoginpageComponent },
  { path: 'signup', title: 'Sign-up Page', component: SignUpPageComponent },
  { path: 'formspage', title: 'User form', component: FormComponent },
  { path: 'homepage', title: 'Homepage', component: HomepageComponent },
  { path: 'agreement', title: 'Terms & Conditions', component: AgreementComponent },
  { path: 'aboutuspage', title: 'AboutUspage', component: AboutusComponent},
  { path: 'contactuspage', title: 'ContactUspage', component: ContactusComponent },
  { path: 'sidebar', title: 'Sidebar', component: DashboardNavbarComponent },
  { path: 'faq', title: "FAQ's", component: FAQPageComponent},
  { path: '**', title: 'error404', component: Error404Component }
];
