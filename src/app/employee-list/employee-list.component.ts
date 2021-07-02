import { Component, OnInit } from '@angular/core';
import {Employee} from "../shared/employee.model";
import {EmployeeService} from "../shared/employee.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[] = [];
  displayColumns: string[] = ['firstName', 'lastName', 'age', 'gender', 'salary', 'position'];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees()
      .then(employees => this.employeeList = employees);
  }

}
