import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-app';

  isLoggedIn : boolean = false;

  constructor(private authService : AuthService){}

  activate():void {
    this.isLoggedIn = this.authService.isLoggedIn;
  }
}
