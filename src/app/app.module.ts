import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


import { EmployeesComponent } from './employees/employees.component';
import { MessageComponent } from './message/message.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { AddEmployeesComponent } from './add-employees/add-employees.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    MessageComponent,
    EmployeeDetailComponent,
    AddEmployeesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
