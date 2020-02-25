import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{EmployeeComponent} from './employee.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeComponent
  ],
  providers: [EmployeeComponent],
  bootstrap: [AppComponent],
  exports:[
    
  ]
})
export class AppModule { }
