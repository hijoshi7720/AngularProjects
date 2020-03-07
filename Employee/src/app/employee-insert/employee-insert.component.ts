import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';
import { Employee } from '../employee';
import{FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-insert',
  templateUrl: './employee-insert.component.html',  
  styleUrls: ['./employee-insert.component.css']
})
export class EmployeeInsertComponent implements OnInit {

  // editControl=new FormControl();

  formData;
  emailId;
  name;
  employee=new Employee();

  constructor(private employeeService:EmployeeService, private router:Router) { }

  ngOnInit() {

    this.formData=new FormGroup(
      {
        emailId:new FormControl(),
name:new FormControl()
      }
    );

  }

onSubmit(data)
{  
  this.employee.Name=data.name;
  this.employee.EmailId=data.emailId;
  
  this.employeeService.insertEmployee(this.employee).subscribe();
  this.router.navigate(['']);
}

}
