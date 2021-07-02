import {Component, OnInit} from '@angular/core';
import {Employee} from "./shared/employee.model";
import {EmployeeService} from "./shared/employee.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  employeeList: Employee[] = [];
  content: string = 'employeeList';

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.employeeService.getEmployees()
      .then(employees => this.employeeList = employees);
  }

  showAddEmployeeForm() {
    this.content = 'employeeAdd';
  }

  addEmployeeToList(employee: Employee) {
    this.employeeList.push(employee);
    this.content = 'employeeList';
  }

  cancelAddForm() {
    this.content = 'employeeList';
  }
}
