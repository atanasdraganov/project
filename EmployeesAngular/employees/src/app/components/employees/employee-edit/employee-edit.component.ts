import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Employee } from "src/app/models/employee.model";
import { EmployeeService } from "src/app/shared/services/employee.service";

@Component({
    selector: 'app-employee-edit',
    templateUrl: './employee-edit.component.html',
    styleUrls: ['./employee-edit.component.scss']
  })

export class EmployeeEditComponent implements OnInit{
    employeeDetails: Employee = {
      id: 0,
      employeeName: '', 
      age: 0,
      addressId: 0,
      positionId: 0, 
      dateOfSigning: new Date(),
      dateOfLeaving: new Date(), 
      isActive: false
    };

    constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private router: Router){}

    ngOnInit(): void{
      this.route.paramMap.subscribe({
        next: (params) => {
          const id = params.get('id');

          if(id){
            this.employeeService.getEmployee(parseInt(id))
            .subscribe({
              next: (response) => {
                this.employeeDetails = response;
              }
            })
          }
        }
      })
    }

    updateEmployee(){
      this.employeeService.updateEmployee(this.employeeDetails.id, this.employeeDetails)
      .subscribe({
        next: (response) => {
          this.router.navigate(['#/%23']);
        }
      })
    }

    deleteEmployee(id: number){
      this.employeeService.deleteEmployee(id)
      .subscribe({
        next: (response)=>{
          this.router.navigate(['#/%23']);
        }
      })
    }
}