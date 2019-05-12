import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Lookup } from './lookup.model';


@Component({
  selector: 'app-my-dropdown',
  templateUrl: './my-dropdown.component.html',
  styleUrls: ['./my-dropdown.component.css']
})
export class MyDropdownComponent implements OnInit {

  @Input()
  entityType : string = '';

  selectedData : Lookup = new Lookup();
  
  @Input()
  defaultSelectedIndex : number = 0;

  @Input()
  name: string = 'select';

  @Input()
  dataList: Lookup[] = [];

  @Output("selectedItem")
  getSelectedItem = new EventEmitter<Lookup>();

  constructor() { }

  ngOnInit() {
    if(this.dataList.length > 0){
      this.selectedData = this.dataList[this.defaultSelectedIndex];
    }
  }

  setSelectedItem():void{
    this.getSelectedItem.emit(this.selectedData);
  }

}
