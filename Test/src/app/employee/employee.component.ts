import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../employee';
import{EmployeeService} from '../employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  //@Input() employees:Employee[];

  employees:Employee[];
  employee:Employee;

  constructor(private employeeService:EmployeeService) {
   
   }

  
  ngOnInit(): void {
    this.getEmployees();    
  }

  getEmployees()
  {
     this.employeeService.getAllEmployee().subscribe( data => { this.employees = data;});
  }
  

  getEmployeeById(id:number)
  {
    this.employeeService.getEmployeeById(id).subscribe(data=>{this.employee=data});
    console.log(this.employee);
  }

}
