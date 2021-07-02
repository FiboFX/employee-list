import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Employee} from "../shared/employee.model";

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  @Input() employee!: Employee
  @Output('cancelForm') cancelForm = new EventEmitter<void>();
  @Output('editEmployeeForm') editEmployeeForm = new EventEmitter<Employee>();

  constructor() { }

  ngOnInit(): void {
  }

  editEmployee() {
    this.editEmployeeForm.emit(this.employee);
    console.log(this.employee);
  }

  backToList() {
    this.cancelForm.emit();
  }
}
