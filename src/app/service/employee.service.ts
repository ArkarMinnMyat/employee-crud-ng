import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Employee } from '../ds/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  REST_API_URL = "http://localhost:8080/api/employees";
  employeesSubject = new BehaviorSubject<Employee[]>([]);
  employees$:Observable<Employee[]>=this.employeesSubject
  .asObservable();

  constructor(private http:HttpClient) {
    this.getAllEmployees()
    .subscribe(data => this.employeesSubject.next(data));
  }

  private getAllEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.REST_API_URL);
  }

  public createEmployee(emp:Employee):Observable<Employee>{
    const header = new HttpHeaders();
    header.set("Content-Type","application/json");
    return this.http.post(this.REST_API_URL,emp,{headers:header})
    .pipe(
      tap(() => this.getAllEmployees())
    );
  }
}
