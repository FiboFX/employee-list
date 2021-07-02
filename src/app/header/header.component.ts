import { EventEmitter } from '@angular/core';
import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output('backToList') backToEmployeeList = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  backToList() {
    this.backToEmployeeList.emit();
  }
}
