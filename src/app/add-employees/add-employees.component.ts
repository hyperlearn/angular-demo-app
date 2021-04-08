import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { MessageService } from '../message.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { addEmployee } from '../employee.action';



@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent implements OnInit {
  count$: Observable<number>;

  constructor(private empService: EmployeeService, private msgService: MessageService, private store: Store<{ count: number }>) { 
    this.count$ = store.select('count')
  }
  employee?: Employee = { id: '', name: '', salary: null };

  submit(emp): void {
    // this.empService.addEmployee(emp)
    //   .subscribe((emp) => {
    //     this.msgService.addMessage('Successfully Added new employee: ' + emp.name);
    //   })
    this.store.dispatch(addEmployee({ employee: emp }))
  }

  ngOnInit(): void {
  }

}
