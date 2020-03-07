import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employee;

formData;
name;
emailId;

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {

    this.formData = new FormGroup({
      emailid: new FormControl(),
      name: new FormControl()
   });
  }

getEmployee()
{
  
}

  onSubmit(data)
  {
    this.employeeService.updateEmployee(this.employee).subscribe();
  }

}
