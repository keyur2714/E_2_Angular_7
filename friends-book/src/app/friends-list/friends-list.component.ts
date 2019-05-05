import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {

  friendNames : string[] = ["keyur","denish","vinit"];

  msg: string = '';
  msgType: string = '';
  editIdx : number = -1;
  name : string = 'hiren';

  selectedName : string = '';

  constructor() { }

  ngOnInit() {
  }

  // addNewFriend(name:string):void {
  //   console.log("Hello Radhe Krishna...!"+name);
  //   this.friendNames.push(name);
  // }

  addNewFriend():void {
    console.log("Hello Radhe Krishna...!"+this.name);
    if(this.friendNames.indexOf(this.name) === -1){
      this.friendNames.push(this.name);
      this.msg = "Friend with name "+this.name+" Added Successfully.";
      this.msgType = 'success';
      this.name = '';
    }else{
      this.msg = "Friend with name "+this.name+" Already Exist.";
      this.msgType = 'info';
      this.name = '';
    }    
  }

  delete(idx:number):void {
    //alert(idx);
    let confirmMsg = confirm("Are you sure want to Delete friends name?");
    //alert(confirmMsg);
    if(confirmMsg){
      this.msg = "Friend with name "+this.friendNames[idx]+" Deleted Successfully.";
      this.msgType = 'danger';
      this.friendNames.splice(idx,1);  
    }    
  }

  updateFriend():void{
    //alert(this.editIdx+ " " +this.name);
    this.friendNames[this.editIdx] = this.name;
    this.msg = 'Friend Name Updated successfully.';    
    this.msgType = 'info';
    this.editIdx = -1;
  }

  edit(idx: number):void{
    this.msg = '';
    this.msgType = '';
    this.name = this.friendNames[idx];
    this.editIdx = idx;
  }

  setSelectedName(name: string):void{
    this.selectedName = name;
  }
}
