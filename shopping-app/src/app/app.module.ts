import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SalesComponent } from './sales/sales.component';
import { AdminComponent } from './admin/admin.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LogoutComponent } from './logout/logout.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    AboutUsComponent,
    SalesComponent,
    AdminComponent,
    SignInComponent,
    LogoutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule    
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
