import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component'; // if you have this

import { ReserveComponent } from './reserve/reserve.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { MyReservationsComponent } from './my-reservations/my-reservations.component';
import { ProfileComponent } from './profile/profile.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: RegisterComponent }, // optional
 
  { path: 'reserve', component: ReserveComponent },
  { path: 'facilities', component: FacilitiesComponent },
  { path: 'my-reservations', component: MyReservationsComponent },
  { path: 'profile', component: ProfileComponent },

];
