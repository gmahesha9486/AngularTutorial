import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  successMsg = '';

  constructor(private employeeService: EmployeeService,
    private router:Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data => {
      console.log(data);
    },
    error => console.log(error));
    this.successMsg = "Saved successfully. test";
    this.employee= new Employee();
    //this.gotoEmployeeList();
  }

  gotoEmployeeList(){
      this.router.navigate(['/employees']);
  }
  mySubmitMethod(){
    console.log(this.employee);
    this.saveEmployee();
  }
}
