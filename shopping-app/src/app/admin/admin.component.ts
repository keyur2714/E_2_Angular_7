import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  id : number = 0;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.activatedRoute.params.subscribe(
    //   (param)=>{
    //     console.log(param);
    //     this.id = param.id;
    //   }
    // )

    this.activatedRoute.paramMap.subscribe(
      (paramMap)=>{
        console.log(paramMap);
        this.id = parseInt(paramMap.get('id'));
      }
    )
  }

}
