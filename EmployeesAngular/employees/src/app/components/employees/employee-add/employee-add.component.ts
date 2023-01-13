import { DATE_PIPE_DEFAULT_TIMEZONE, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit{

  addEmployeeReq: Employee = {
    id: 0,
    employeeName: '', 
    age: 0,
    addressId: 0,
    positionId: 0, 
    dateOfSigning: new Date(),
    dateOfLeaving: new Date(), 
    isActive: false
  };
  constructor(private employeeService: EmployeeService, private router: Router){}

  ngOnInit(): void {
    
  }

  addEmployee(){
    this.employeeService.addEmployee(this.addEmployeeReq)
    .subscribe({ 
      next: (employee) => {
        this.router.navigate(['#']);
      }
    });
  }
}
