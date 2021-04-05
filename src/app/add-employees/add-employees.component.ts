import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent implements OnInit {

  constructor(private empService: EmployeeService, private msgService: MessageService) { }
  employee?: Employee = { id: '', name: '', salary: null };

  submit(emp): void {
    this.empService.addEmployee(emp)
      .subscribe((emp) => {
        this.msgService.addMessage('Successfully Added new employee: ' + emp.name);
      })
  }

  ngOnInit(): void {
  }

}
