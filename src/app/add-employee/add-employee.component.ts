import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  empCode=""
  name=""
  designation=""
  salary=""
  companyName=""
  mobileNo=""
  username=""
  password=""

  constructor(private api:ApiService){}

  readValues=()=>{
    let data:any={"empCode":this.empCode,"name":this.name,"designation":this.designation,"salary":this.salary,"companyName":this.companyName,"mobileNo":this.mobileNo,"username":this.username,"password":this.password}
    console.log(data)

    this.api.addEmployee(data).subscribe(
      (response:any)=>{
        console.log(response)
      }
    )


  }

}
