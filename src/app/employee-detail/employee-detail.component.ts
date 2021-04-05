import { Component, OnInit, Input } from '@angular/core';
import { from } from 'rxjs';
import { Employee } from '../employee';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
// import { runInThisContext } from 'vm';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  @Input() employee? : Employee;

  constructor(private route: ActivatedRoute,
    private empService: EmployeeService, private location: Location
    ) { }


    getEmployee(): void {
      const id = this.route.snapshot.paramMap.get('id');
      console.log(id);
      this.empService.getEmployee(id)
        .subscribe(emp => {
          this.employee = emp;
        })
    }
  ngOnInit(): void {
    this.getEmployee()
  }

}
