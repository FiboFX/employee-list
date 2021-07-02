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
  currentEditEmployee: Employee = {id: 1, firstName: 'Karol', lastName: 'Knieć', age: 24, gender: 'Male', salary: 5000, position: 'CEO'};

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
    employee.id = Math.max(...this.employeeList.map(e => e.id)) + 1;
    this.employeeService.addEmployee(employee)
      .then(employees => this.employeeList = employees);
    this.content = 'employeeList';
  }

  removeEmployee(id: number) {
    this.employeeList = [...this.employeeService.removeEmployee(id)];
    console.log(this.employeeList);
  }

  switchEditEmployee(id: number) {
    this.currentEditEmployee = this.employeeService.getEmployee(id);
    if(this.currentEditEmployee === undefined)
      return;
    this.content = 'employeeEdit';
  }

  editEmployee(employee: Employee) {
    this.employeeList = this.employeeService.editEmployee(employee);
    this.content = 'employeeList';
  }

  backToList() {
    this.content = 'employeeList';
  }
}
