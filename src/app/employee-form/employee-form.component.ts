import { Component } from '@angular/core';
import { FormsModule, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Employee } from '../ds/employee';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss'
})
export class EmployeeFormComponent {

  empForm = this.fb.group({
    first_name:['',{validators :[Validators.required]}],
    last_name:['',{validators :[Validators.required]}],
    email:['',{validators :[Validators.required]}]
  })

  constructor(private fb:NonNullableFormBuilder,
    private employeeService:EmployeeService,
    private router:Router){

  }

  get first_name(){
    return this.empForm.controls['first_name'];
  }
  get last_name(){
    return this.empForm.controls['last_name'];
  }
  get email(){
    return this.empForm.controls['email'];
  }
  createEmployee(){
    // console.log(this.empForm.value);
    const employee:Employee = {
      // first_name : this.first_name.value,
      // last_name : this.last_name.value,
      // email : this.email.value

      ...this.empForm.value
    }
    this.employeeService.createEmployee(employee)
      .subscribe(
        {next: data => console.log(data),
        error: err => console.log(err),
        complete: ()=> this.router.navigateByUrl("/")
        }
      )
  }
}