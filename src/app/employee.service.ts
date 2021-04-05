import { Injectable } from '@angular/core';
import { Response } from './response';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // httpOptions = new HttpHeaders({ 'Content-Type': 'application/json' });
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

  constructor(private http: HttpClient) { }
  url = 'http://localhost:3000/employees';

  getAllEmployees(): Observable<Response[]> {
    return this.http.get<Response[]>(this.url, this.httpOptions);
  }

  getEmployee(id): Observable<Response> {
    const newUrl = `${this.url}/${id}`; // id as xyz, http://localhost:3000/employees/xyz
    return this.http.get<Response>(newUrl, this.httpOptions);
  }

  addEmployee(emp: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.url, emp, this.httpOptions);
  }
}
