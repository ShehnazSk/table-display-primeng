import { Component, OnInit } from '@angular/core';
import { mainData } from '../mainData';
import { headersData } from '../firstJson';
import { subData } from '../secondJson';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'task';
  
  rowValues = []
  ngOnInit() { 
    this.rowValues = this.getRowData();
  }
  getHeaders() {
    return Object.keys(mainData.data)
  }
  getTableHeaders(header) {
    return mainData.data[header]
  }
  getRowData() {
    return subData.Data;
  }
}
