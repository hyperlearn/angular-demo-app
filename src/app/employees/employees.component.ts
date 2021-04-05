import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = []

  selectedEmployee?: Employee;

  onSelect(emp: Employee): void {
    // console.log('hi, I was executed', emp);
    this.selectedEmployee = emp
  }
  constructor(private employeeService: EmployeeService, private msgService: MessageService) { }

  getEmployees(): void {
    this.msgService.addMessage('getting all employees');
    this.employeeService.getAllEmployees().subscribe((emp) => {
      this.employees = emp.map((emp) => ({ name: emp.name, salary: emp.salary, id: emp.id}));
    });
  }

  ngOnInit(): void {
    // console.log(this.selectedEmployee);
    this.msgService.addMessage('Initiated Employees')
    this.getEmployees();
  }

}
