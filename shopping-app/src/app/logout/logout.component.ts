import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-logout',
  template: ''
})
export class LogoutComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute,private authService : AuthService,private router:Router) { }

  ngOnInit() {
    // this.activatedRoute.queryParams.subscribe(
    //   (queryParam)=>{
    //     alert(queryParam.fromAction);
    //   }
    // )    
    // this.activatedRoute.queryParamMap.subscribe(
    //   (queryParamMap)=>{
    //     alert(queryParamMap.get('fromAction'));
    //   }
    // )    
    this.authService.isLoggedIn = false;
    this.authService.successUrl = 'home';    
    this.router.navigate(['/signin']);
  }

}
