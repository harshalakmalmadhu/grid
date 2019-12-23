import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { tdata } from '../tableData';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() tabledata:tdata[];
  @Input() startIndex:number;
  @Input() endIndex:number;
  @Output()updatedPageNumbers = new EventEmitter<{startIndex:number,endIndex:number}>();
  pages:any=[];


  constructor() { }

  ngOnInit() {
    this.getPageNumbers();
  }
  getPageNumbers() {

    for (let i = 0; i < this.tabledata.length / 5; i++) {
      this.pages.push(i);
    }
    return this.pages;
  }
  updateIndex(pageIndex) {
    this.startIndex = pageIndex * 5;
    this.endIndex = this.startIndex + 5;
    this.updatedPageNumbers.emit({startIndex:this.startIndex,endIndex:this.endIndex})
  }


}
