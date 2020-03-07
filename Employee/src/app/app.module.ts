import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeService } from './employee.service';
import {  HttpClientModule } from '@angular/common/http';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeInsertComponent } from './employee-insert/employee-insert.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EditEmployeeComponent,
    EmployeeInsertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,       
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
  exports:[
    
  ]
})
export class AppModule { }
