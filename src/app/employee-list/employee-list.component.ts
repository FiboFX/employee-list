import { EventEmitter } from '@angular/core';
import {Component, Input, OnInit, Output} from '@angular/core';
import {Employee} from "../shared/employee.model";
import {EmployeeService} from "../shared/employee.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  @Input() employeeList: Employee[] = [];
  displayColumns: string[] = ['firstName', 'lastName', 'age', 'gender', 'salary', 'position', 'action'];
  @Output('removeEmployeeFromList') removeEmployee = new EventEmitter<number>();
  @Output('editEmployeeFromList') editEmployee = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  removeEmployeeFromList(id: number) {
    this.removeEmployee.emit(id);
  }

  editEmployeeFromList(id: number) {
    this.editEmployee.emit(id);
  }

}
