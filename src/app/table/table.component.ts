import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
 
  sample:any= [
  { "instID" : "001","procID":"TableComponent","threadNum" : "OnInit","status" : "1"},
  { "instID" : "002","procID":"TableComponent","threadNum" : "OnInit","status" : "2"},
  { "instID" : "003","procID":"OnInit","threadNum" : "app","status" : "12"},
  { "instID" : "004","procID":"templateUrl","threadNum" : "12","status" : "12"},
  { "instID" : "005","procID":"component","threadNum" : "component","status" : "12"},
  { "instID" : "006","procID":"templateUrl","threadNum" : "12","status" : "12"},
  { "instID" : "007","procID":"OnInit","threadNum" : "OnInit","status" : "12"},
  { "instID" : "008","procID":"OnInit","threadNum" : "class","status" : "12"},
  { "instID" : "009","procID":"templateUrl","threadNum" : "class","status" : "12"},
  { "instID" : "010","procID":"app","threadNum" : "12","status" : "12"},
  { "instID" : "011","procID":"templateUrl","threadNum" : "OnInit","status" : "12"},
  { "instID" : "012","procID":"55","threadNum" : "12","status" : "12"},
  { "instID" : "013","procID":"55","threadNum" : "12","status" : "12"},
  { "instID" : "014","procID":"templateUrl","threadNum" : "OnInit","status" : "12"},
  { "instID" : "015","procID":"55","threadNum" : "12","status" : "12"},
  { "instID" : "016","procID":"55","threadNum" : "12","status" : "12"},
  { "instID" : "017","procID":"55","threadNum" : "12","status" : "12"},
  { "instID" : "018","procID":"55","threadNum" : "OnInit","status" : "12"},
  { "instID" : "019","procID":"55","threadNum" : "12","status" : "12"},
  { "instID" : "020","procID":"55","threadNum" : "OnInit","status" : "12"},
  

]


  constructor() { }

  ngOnInit() {
  }
  

}
