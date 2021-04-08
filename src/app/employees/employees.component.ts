import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { MessageService } from '../message.service';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../counter.action';
import { Observable } from 'rxjs';


@Component({
  selector: 'employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = []
  employees$: Observable<Employee[]>;

  selectedEmployee?: Employee;
  displayedColumns: string[] = ['id', 'name', 'salary', 'details'];

  onSelect(emp: Employee): void {
    // console.log('hi, I was executed', emp);
    this.selectedEmployee = emp
  }
  count$: Observable<number>
  constructor(private employeeService: EmployeeService, private msgService: MessageService, private store: Store<{count: number, employees: Employee[]}>) { 
    this.count$ = store.select('count');
    this.employees$ = store.select('employees');
  }

  getEmployees(): void {
    // this.msgService.addMessage('getting all employees');
    // this.employeeService.getAllEmployees().subscribe((emp) => {
    //   this.employees = emp.map((emp) => ({ name: emp.name, salary: emp.salary, id: emp.id}));
    // });
    this.employees$.subscribe((res) => {
      console.log(res);
      this.employees = res
    });
  }

  incrementCounter(): void {
    this.store.dispatch(increment())
  }

  decrementCounter(): void {
    this.store.dispatch(decrement())
  }

  resetCounter(): void {
    this.store.dispatch(reset());
  }

  ngOnInit(): void {
    // console.log(this.selectedEmployee);
    this.msgService.addMessage('Initiated Employees')
    this.getEmployees();
  }

}
