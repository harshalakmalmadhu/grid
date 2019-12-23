import { Component, OnInit, Input } from '@angular/core';
import { TableService } from '../table.service';
import { tdata} from '../tableData';
import { tableData } from '../mock-tableData';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  @Input() startIndex:number;
  @Input() endIndex:number; 
  // startIndex = 0
  // endIndex = 5
  searchItem: string = '';
  InstID: string;
  Status: string;
  ProcID: string;
  ThreadNum: string;
  isSearchById: boolean = false
  isSearchByStatus: boolean = false
  isSearchByProcId: boolean = false
  isSearchByThreadNum: boolean = false

  tabledata: tdata[];
  pages: any = [];
  columns: any = [];

  constructor(private tableService: TableService) { }


  ngOnInit() {
    this.getTableData();
    this.getPageNumbers();
  }

  getTableData(): void {
    this.tableService.getTableData().subscribe(tabledata => this.tabledata = tabledata);

    // this.columns=Object.keys(tableData[1]);
  }
  getPageNumbers() {

    for (let i = 0; i < this.tabledata.length / 5; i++) {
      this.pages.push(i);
    }
    return this.pages;
  }
  // updateIndex(pageIndex) {
  //   this.startIndex = pageIndex * 5;
  //   this.endIndex = this.startIndex + 5;
  // }
  onUpdatedPageNumbers(pageNumbers){
    this.startIndex = pageNumbers.startIndex;
    this.endIndex = pageNumbers.endIndex;
    console.log(pageNumbers)

  }

  uniSearch() {
    if (this.searchItem != "") {
      this.pages = [];
      this.getTableData();


      this.tabledata = this.tabledata.filter(res => {
        return res.threadNum.toLocaleLowerCase().match(this.searchItem.toLocaleLowerCase()) ||
          res.instID.toString().toLocaleLowerCase().match(this.searchItem.toLocaleLowerCase()) ||
          res.procID.toLocaleLowerCase().match(this.searchItem.toLocaleLowerCase()) ||
          res.status.toLocaleLowerCase().match(this.searchItem.toLocaleLowerCase())

      })
      this.getPageNumbers();


    } else if (this.searchItem == "") {
      this.pages = [];
      this.getTableData();
      this.getPageNumbers();
      this.startIndex = 0
      this.endIndex = 5

    }

  }

  searchById() {
    this.getTableData();
    this.isSearchById = true;
    if (this.InstID != "") {
      this.pages = [];

      this.tabledata = this.tabledata.filter(res => {
        return res.instID.toString().toLocaleLowerCase().match(this.InstID.toLocaleLowerCase())

      });
      this.getPageNumbers();
      console.log(this.tabledata)

    } else if (this.InstID == "" && this.isSearchById) {
      this.pages = [];
      this.getTableData();
      this.getPageNumbers();
      this.startIndex = 0
      this.endIndex = 5

    }


  }
  searchByProcID() {
    this.getTableData();
    this.isSearchByProcId = true;
    if (this.ProcID != "") {
      this.pages = [];

      this.tabledata = this.tabledata.filter(res => {
        return res.procID.toLocaleLowerCase().match(this.ProcID.toLocaleLowerCase())

      });
      this.getPageNumbers();
      console.log(this.tabledata)

    } else if (this.ProcID == "" && this.isSearchByProcId) {
      this.pages = [];
      this.getTableData();
      this.getPageNumbers();
      this.startIndex = 0
      this.endIndex = 5

    }


  }
  searchByThreadNum() {
    this.getTableData();
    this.isSearchByThreadNum = true;
    if (this.ThreadNum != "") {
      this.pages = [];

      this.tabledata = this.tabledata.filter(res => {
        return res.threadNum.toLocaleLowerCase().match(this.ThreadNum.toLocaleLowerCase())

      });
      this.getPageNumbers();
      console.log(this.tabledata)

    } else if (this.ThreadNum == "" && this.isSearchByThreadNum) {
      this.pages = [];
      this.getTableData();
      this.getPageNumbers();
      this.startIndex = 0
      this.endIndex = 5

    }


  }
  searchByStatus() {
    this.getTableData();
    this.isSearchByStatus = true;
    if (this.Status != "") {
      this.pages = [];


      this.tabledata = this.tabledata.filter(res => {
        return res.status.toLocaleLowerCase().match(this.Status.toLocaleLowerCase())

      });
      this.getPageNumbers();
      console.log(this.tabledata)

    } else if (this.Status == "" && this.isSearchByStatus) {
      this.pages = [];
      this.getTableData();
      this.getPageNumbers();

      this.startIndex = 0
      this.endIndex = 5


    }

  }






}
