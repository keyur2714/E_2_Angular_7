import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-data-grid',
  templateUrl: './my-data-grid.component.html',
  styleUrls: ['./my-data-grid.component.css']
})
export class MyDataGridComponent implements OnInit {

  @Input()
  bgColor: string = 'warning';

  @Input()
  tableType : string = 'striped';

  @Input()
  listType: string;

  @Input()
  dataList: any[] = [];

  @Input()
  columnList: string[] = [];

  @Input()
  columnHeaderList: string[] = [];

  constructor() { }

  ngOnInit() {
  }

}
