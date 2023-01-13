import { DATE_PIPE_DEFAULT_TIMEZONE, PRECONNECT_CHECK_BLOCKLIST } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/shared/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

employees: Employee[] = [];
constructor(private employeeService: EmployeeService){}

ngOnInit(): void {
  this.employeeService.getAllEmployees()
  .subscribe({
    next:(employees) => {
      this.employees = employees;
    }
  });
}

}
