import { Component } from '@angular/core';
import {EmployeeService} from './employee.service';
import { Employee } from './employee';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';
 Emp : Employee[];


constructor(public emoloyeeService:EmployeeService)
{
 
}
 
}
