import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  public items = [
    { id: 1, name: 'Tan Lo', isDefault: true },
    { id: 2, name: 'To Lan', isDefault: false },
    { id: 4, name: 'Lo Lo', isDefault: true },
    { id: 5, name: 'Lo Lo', isDefault: true },
    { id: 6, name: 'Lo Lo', isDefault: false },
    { id: 7, name: 'Lo Lo', isDefault: true },
    { id: 8, name: 'Lo Lo', isDefault: true },
    { id: 9, name: 'Lo Lo', isDefault: false },
    { id: 10, name: 'Lo Lo', isDefault: true },
    { id: 11, name: 'Lo Lo', isDefault: true },
    { id: 12, name: 'Lo Lo', isDefault: true }
  ];
  constructor() { }

  ngOnInit() {
    this.addBg();
  }

  addBg() {
    $('body').addClass('guess-bg');
  }
}
