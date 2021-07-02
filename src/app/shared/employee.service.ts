import { Injectable } from "@angular/core";
import {Employee} from "./employee.model";
import {EMPLOYEES} from "./mock-employees";

@Injectable()
export class EmployeeService {
  getEmployees() {
    return Promise.resolve(EMPLOYEES);
  }
}
