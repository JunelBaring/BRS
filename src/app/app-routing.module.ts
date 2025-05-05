import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReserveComponent } from './reserve/reserve.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { MyReservationsComponent } from './my-reservations/my-reservations.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
  { path: 'dashboard', component: DashboardComponent },
  { path: 'reserve', component: ReserveComponent },
  { path: 'facilities', component: FacilitiesComponent },
  { path: 'my-reservations', component: MyReservationsComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }