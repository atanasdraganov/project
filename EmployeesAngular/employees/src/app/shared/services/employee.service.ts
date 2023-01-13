import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models/employee.model';
import { environment } from 'src/assets/environments/environments';

@Injectable({
    providedIn: 'root'
})

export class EmployeeService{

    baseApiUrl:string = environment.baseApiUrl;
    constructor(private http: HttpClient){}

    getAllEmployees(): Observable<Employee[]>{
        return this.http.get<Employee[]>(this.baseApiUrl + '/api/Employee');
    }

    addEmployee(employee: Employee):Observable<Employee>{
       return this.http.post<Employee>(this.baseApiUrl + '/api/Employee', employee);
    }

    getEmployee(id: number): Observable<Employee>{
        return this.http.get<Employee>(this.baseApiUrl + '/api/Employee/' + id);
    }

    updateEmployee(id: number, employee: Employee): Observable<Employee>{
        return this.http.put<Employee>(this.baseApiUrl + '/api/Employee/' + id, employee);
    }
    
    deleteEmployee(id: number):Observable<Employee>{
        return this.http.delete<Employee>(this.baseApiUrl + '/api/Employee/' + id);
    }
}