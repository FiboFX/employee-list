import { Injectable } from "@angular/core";
import {Employee} from "./employee.model";
import {EMPLOYEES} from "./mock-employees";

@Injectable()
export class EmployeeService {
  employees: Employee[] = EMPLOYEES;

  getEmployees() {
    return Promise.resolve(this.employees);
  }

  getEmployee(id: number) {
    let employee = this.employees.find(e => e.id === id);
    if(employee === undefined)
      return this.employees[0];
    return employee;
  }

  addEmployee(employee: Employee) {
    this.employees.push(employee);
    return Promise.resolve(this.employees);
  }

  editEmployee(employee: Employee) {
    for(let e of this.employees) {
      if(e.id === employee.id) {
        e = employee;
      }
    }

    return this.employees;
  }

  removeEmployee(id: number) {
    let i = 0;
    for(let employee of this.employees) {
      if(employee.id === id) {
        this.employees.splice(i, 1);
        break;
      }
      i++;
    }

    return this.employees;
  }
}
