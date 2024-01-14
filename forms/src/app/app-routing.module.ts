// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component'; 
import { HeroFormComponent } from './hero-form/hero-form.component'


const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route redirects to /home
  { path: 'signup', component: SignupComponent }, // Example: Add other routes as needed
  { path: 'login', component: LoginComponent },
  { path: 'hero-form', component: HeroFormComponent },
  // Add other routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
