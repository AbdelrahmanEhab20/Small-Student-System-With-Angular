import { Component, OnInit } from '@angular/core';
import { MobileService } from '../services/mobile.service';
import { Employee } from './../models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  // mobileservice: MobileService = new MobileService();
  employee: Employee = new Employee();
  //private _mobileservice: MobileService
  constructor() { }

  getFullName(): string {
    return this.employee.firstName + ' ' + this.employee.lastName;
  }

  setFirstName() {
    this.employee.firstName = "ABDOOOOO";
  }

  setLastName(lastName: string) {
    this.employee.lastName = lastName;
  }


  ngOnInit(): void {
  }

}
