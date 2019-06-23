import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      (queryParam)=>{
        alert(queryParam.fromAction);
      }
    )    
    this.activatedRoute.queryParamMap.subscribe(
      (queryParamMap)=>{
        alert(queryParamMap.get('fromAction'));
      }
    )
  }

}
