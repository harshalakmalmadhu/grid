import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tdata } from './tableData';
import { tableData } from './mock-tableData';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }


  getTableData():Observable<tdata[]>{
    return of (tableData);
  }
}
