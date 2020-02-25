import { Component } from '@angular/core';
import{Employee} from './employee';
import {EmployeeComponent} from './employee.component';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee';
}
