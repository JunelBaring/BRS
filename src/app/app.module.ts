import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// Import standalone components (do not declare)
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [], // ✅ No declarations for standalone components
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppComponent,         // ✅ Standalone
    LoginComponent,       // ✅ Standalone
    RegisterComponent,    // ✅ Standalone
    DashboardComponent    // ✅ Standalone
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
