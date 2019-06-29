import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SalesComponent } from './sales/sales.component';
import { AdminComponent } from './admin/admin.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth/auth-guard.service';

const routes: Routes = [
  {path : '', redirectTo : 'home' , pathMatch : 'full'},
  {path : 'home' , component : HomeComponent},
  {path : 'contact-us' , component : ContactUsComponent},
  {path : 'aboutus' , component : AboutUsComponent},
  {path : 'sales' , component : SalesComponent , canActivate : [AuthGuard]},
  {path : 'admin/:id/:name' , component : AdminComponent, canActivate : [AuthGuard]},
  {path : 'signin' , component : SignInComponent},
  {path : 'logout' , component : LogoutComponent , canActivate : [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
