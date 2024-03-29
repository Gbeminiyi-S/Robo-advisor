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
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { BarChartComponent } from './components/dashboardComponents/bar-chart/bar-chart.component';
import { TableComponent } from './components/dashboardComponents/table/table.component';
import { AuthGuardService } from './services/auth_guard/auth-guard.service';

export const routes: Routes = [
  { path: '', title: 'Landing Page', component: LandingPageComponent },
  { path: 'login', title: 'Log-in Page', component: LoginpageComponent },
  { path: 'signup', title: 'Sign-up Page', component: SignUpPageComponent },
  // { path: 'homepage', title: 'Homepage', component: HomepageComponent},
  { path: 'homepage', title: 'Homepage', component: HomepageComponent, canActivate: [AuthGuardService]},
  { path: 'formspage', title: 'User form', component: FormComponent, canActivate: [AuthGuardService]},
  { path: 'agreement', title: 'Terms & Conditions', component: AgreementComponent, canActivate: [AuthGuardService]},
  { path: 'aboutuspage', title: 'AboutUspage', component: AboutusComponent},
  { path: 'contactuspage', title: 'ContactUspage', component: ContactusComponent },
  { path: 'dashboard', title: 'Dashboard', component: DashboardPageComponent, canActivate: [AuthGuardService]},
  { path: 'chart', title: 'Dashboard', component: TableComponent },
  { path: 'faq', title: "FAQ's", component: FAQPageComponent},
  { path: '**', title: 'error404', component: Error404Component }
];
