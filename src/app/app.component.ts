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
 
  getHeaders() {
    // returning the values of an object to tabs
    return Object.keys(mainData.data)
  }
  getTableHeaders(header) {
    // retuning list of values to the header
    return mainData.data[header]
  }
  getRowData() {
    // returning an object (data) 
    return subData.Data;
  }
  ngOnInit() { 
    //assigning an object to the table 
    this.rowValues = this.getRowData();
  }
}
