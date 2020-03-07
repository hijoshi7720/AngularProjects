import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeInsertComponent } from './employee-insert/employee-insert.component';


export const appRoutes: Routes =[ {path:'edit',component:EditEmployeeComponent},
{path:'employeeList',component:EmployeeListComponent},
{path:'insert',component:EmployeeInsertComponent},
{path:'',component:EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
