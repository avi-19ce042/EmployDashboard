import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeModel } from '../employ.model';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-employ-form',
  templateUrl: './employ-form.component.html',
  styleUrls: ['./employ-form.component.css'],
})
export class EmployFormComponent implements OnInit {
  formValue!: FormGroup;
  employeeModelObj: EmployeeModel = new EmployeeModel();
  editEmployee: any;
  isEditMode: boolean = false;
  id: any;
  submitted = false;
  constructor(
    private formbuilder: FormBuilder,
    private api: ApiService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      id: [],
      name: [
        '',
        [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+')],
      ],
      emailId: ['', [Validators.required, Validators.email]],
      mobileNo: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      dept: ['', [Validators.required]],
    });

    // this.id = this.route.snapshot.params['id'];
    // console.log(this.id);
    this.route.queryParams.subscribe((params) => {
      this.id = params['id'];
      this.isEditMode = this.id;
      if (this.isEditMode) {
        this.getEmploy();
      }
    });
    // this.getEmploy()
  }
  postEmployeeDetails() {
    this.submitted = true;
    if (this.isEditMode) {
      this.updateEmploy();
    }
    this.employeeModelObj.id = this.formValue.value.id;
    this.employeeModelObj.name = this.formValue.value.name;
    this.employeeModelObj.emailId = this.formValue.value.emailId;
    this.employeeModelObj.mobileNo = this.formValue.value.mobileNo;
    this.employeeModelObj.dept = this.formValue.value.dept;

    this.api.postEmployee(this.employeeModelObj).subscribe(
      (res) => {
        console.log(res);
        this.toRoute();
        alert('Employ Added Successfully');
      },
      (err) => {
        alert('Something went wrong');
      }
    );
     
  }

  getEmploy() {
    this.api.updateEmployee(this.id).subscribe((data) => {
      this.employeeModelObj = data;
      // this.formValue.value.name = this.employeeModelObj.name;
      this.formValue.setValue({
        id: data.id,
        name: data.name,
        emailId: data.emailId,
        mobileNo: data.mobileNo,
        dept: data.dept,
      });
      console.log(this.formValue.value);
    });
  }
  toRoute(){
    let ref = document.getElementById('route');
    ref?.click();
  }
  updateEmploy() {
    this.api
      .updateOneEmployee(this.employeeModelObj, this.id)
      .subscribe((data) => {
        console.log(this.employeeModelObj);
        alert('Employee data updated');
      });
  }
}
// .subscribe(res=>{
//  this.editEmployee = this.formValue;
// },
// err=>{
//   console.log(err);

// })
