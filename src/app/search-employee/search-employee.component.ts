import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent {

  constructor(private api:ApiService, private route:Router){}

  empCode=""
  searchData:any=[]
  readValues=()=>{

    let data ={"empCode":this.empCode}
  console.log(data)

  this.api.searchEmployee(data).subscribe(
    (response:any)=>{
      console.log(response)
      if (response.length==0) {
        alert("invalid employee code")
        
      } else {
        this.searchData=response
      }
    }
  )
  }

  deleteBtnClick=(id:any)=>{
    let deleteData:any={"id":id}
    this.api.deleteEmployee(deleteData).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status=="success") {
          alert("Deleted")
          this.searchData=[]
        } else {
          alert("Something went wrong")
        }
      }
    )
  }

}
