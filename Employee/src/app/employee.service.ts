import { Injectable } from '@angular/core';
import {observable, from, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url:string="https://localhost:44367/Api/Employee";

  constructor(private http:HttpClient) { }

  getEmployees():Observable<Employee[]>
  {
   return this.http.get<Employee[]>(this.url+"/GetEmployees");
  }

  insertEmployee(employee:Employee)
  {
return this.http.post<any>(this.url+"/InsertEmployee",employee);
  }

updateEmployee(employee:Employee)
{
  return this.http.post<Employee>(this.url+"UpdateEmployee",employee);
}

}
