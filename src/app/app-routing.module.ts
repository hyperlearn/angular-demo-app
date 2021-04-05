import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';


const routes: Routes = [
  { path: 'employeeList', component: EmployeesComponent },
  { path: 'addEmployee', component: AddEmployeesComponent },
  { path: 'employeeDetail/:id', component: EmployeeDetailComponent }, // employeeDetail/abc
  { path: '', redirectTo: '/employeeList', pathMatch: 'full' }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
