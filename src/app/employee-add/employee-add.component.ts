import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Employee} from "../shared/employee.model";

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  @Input()
  firstName!: string;
  @Input() lastName!: string;
  @Input() gender!: string;
  @Input() age!: number;
  @Input() salary!: number;
  @Input() position!: string;
  @Output('addEmployee') addEmployeeToList = new EventEmitter<Employee>();
  @Output('cancelForm') cancelForm = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  addEmployee() {
    if(this.firstName === '' ||
    this.lastName === '' ||
    this.gender === '' ||
    this.age === undefined ||
    this.salary === undefined ||
    this.position === '') {
      return;
    }

    this.addEmployeeToList.emit({
      id: 0,
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
      gender: this.gender,
      salary: this.salary,
      position: this.position
    });
  }

  backToList() {
    this.cancelForm.emit();
  }
}


