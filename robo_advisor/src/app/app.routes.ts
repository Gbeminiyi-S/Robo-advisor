import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FormsPageComponent } from './forms-page/forms-page.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'formspage', component: FormsPageComponent}
];
