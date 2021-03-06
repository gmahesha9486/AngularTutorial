import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[]= [];

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {

    this.getEmployees();
    // Below is the dummy data.
    /*
    this.employees = [{
      "id":1,
      "firstName":"Mahesh",
      "lastName":"Gunaje",
      "emailId":"gmahe@gmail.com"
    },
  {
    "id":2,
    "firstName":"Ramesh",
    "lastName":"Bhat",
    "emailId":"ramesh@gmail.com"
  }]
  */

  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
    })
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee',id]);
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe(data => {
      this.getEmployees();
    })
  }

  viewEmployee(id:number){
    this.router.navigate(['employee-details',id]);
  }
}
