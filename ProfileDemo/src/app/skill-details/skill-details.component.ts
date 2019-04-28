import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-details',
  templateUrl: './skill-details.component.html',
  styleUrls: ['./skill-details.component.css']
})
export class SkillDetailsComponent implements OnInit {

  //Create Object Array With Old Javascript Approach.

  skillList = [
    {
      skillType : 'Language',
      skillSets : ["Java","Java Script","Angular 2/4","Spring"]
    },
    {
      skillType : 'Database',
      skillSets : ["MySql","MSSql","Mongo Db"]
    },
    {
      skillType : 'Tools',
      skillSets : ["Eclipse","VS Code","Windows Office"]
    },
    {
      skillType : "Operating System",
      skillSets : ["Windows","Linux","Ubantu"]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
