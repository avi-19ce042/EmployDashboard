import { Component, OnInit } from '@angular/core';
import { EmployFormComponent } from '../employ-form/employ-form.component';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-employ-list',
  templateUrl: './employ-list.component.html',
  styleUrls: ['./employ-list.component.css'],
})

export class EmployListComponent implements OnInit {
  employeeData!: any;
 
  constructor(private api: ApiService) {}
  
  ngOnInit(): void {
    this.api.getEmployee().subscribe((res) => {
      this.employeeData = res.employs;
      console.log(res);
    });
  }

  deleteEmploy(emp: any) {
    this.api.deleteEmployee(emp.id).subscribe((res) => {
      alert('Employee Has Been Deleted');

      this.api.getEmployee().subscribe((res) => {
        this.employeeData = res;
      });
      // const index = this.employeeData.indexOf(emp);
      // this.employeeData.splice(index, 1);
    });
  }
  editEmploy(emp: any) {
    this.api.updateOneEmployee(emp,emp.id)
    .subscribe(res=> {
    })
  }
}

// this.api.deleteEmployee(emp.id)
// .subscribe(res => {
//   alert('Employee Has Been Deleted');
//   this.employeeData = res
// })

// getAllEmployee(){
//   this.api.getEmployee()
//   .subscribe(res=>{
// this.employeeData = res;
// console.log(res);

//   })
// }

// -------------------Dump------------------//
 // url="http://localhost:3000/posts/";