import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { from } from 'rxjs';
import {Employee} from './employee';
import {Observable} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = 'http://localhost:65389/Api/Employee';  

  constructor(private http: HttpClient) { }  

  createEmployee(employee: Employee): Observable<Employee> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<Employee>(this.url + '/InsertEmployeeDetails/',  
    employee, httpOptions);  
  }  

  getAllEmployee(): Observable<Employee[]> {  
    return this.http.get<Employee[]>(this.url + '/AllEmployeeDetails');  
  }  

}
