import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Capitalize } from './capitialize.pipe';


import { EmployeesComponent } from './employees/employees.component';
import { MessageComponent } from './message/message.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { CounterComponent } from './counter/counter.component';
import { employeeReducer } from './employee.reducer'; 


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    MessageComponent,
    EmployeeDetailComponent,
    AddEmployeesComponent,
    Capitalize,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule, MatDividerModule, MatCardModule, MatTableModule, MatInputModule,MatFormFieldModule,
    StoreModule.forRoot({ count: counterReducer, employees: employeeReducer })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
