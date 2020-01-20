import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export interface PeriodicElement {
  name: string;
  id: number;
  email: string;
  position: string;
  actions: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: 'Hydrogen', email: 'test@gmail.com', position: 'H', actions: 'test'},
  { id: 2, name: 'Helium', email: 'test@gmail.com', position: 'He' , actions: 'test'},
  { id: 3, name: 'Lithium', email: 'test@gmail.com', position: 'Li' , actions: 'test'},
  { id: 4, name: 'Beryllium', email: 'test@gmail.com', position: 'Be' , actions: 'test'},
  { id: 5, name: 'Boron', email: 'test@gmail.com', position: 'B' , actions: 'test'},
  { id: 6, name: 'Carbon', email: 'test@gmail.com', position: 'C' , actions: 'test'},
  { id: 7, name: 'Nitrogen', email: 'test@gmail.com', position: 'N' , actions: 'test'},
  { id: 8, name: 'Oxygen', email: 'test@gmail.com', position: 'O' , actions: 'test'},
  { id: 9, name: 'Fluorine', email: 'test@gmail.com', position: 'F' , actions: 'test'},
  { id: 10, name: 'Neon', email: 'test@gmail.com', position: 'Ne' , actions: 'test'},
];

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'position', 'actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
