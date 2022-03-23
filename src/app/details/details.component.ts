import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Student } from './../models/student';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  student: Student = new Student();
  
  formCreation:any;
  // student: Student = new Student;
  constructor(private _formBuilder:FormBuilder,private _http: HttpClient, private _activatedRoute: ActivatedRoute) { }

  //https://api.mohamed-sadek.com/Student/GetByID

  ngOnInit(): void {
    this.formCreation=this._formBuilder.group({
      Age: ["",[Validators.required,Validators.maxLength(13)]],
      Mobile: ["",[Validators.required,Validators.minLength(3),Validators.maxLength(13)]],
      Email: ["",[Validators.required,Validators.email,Validators.minLength(3),Validators.maxLength(25)]]
      //Validators.pattern ----> Custom Validation (REGEX)
    });
    
    this._activatedRoute.paramMap.subscribe(
      params => {
        this._http.get(`https://api.mohamed-sadek.com/Student/GetByID?id=${params.get('id')}`).subscribe(
          (response: any) => {
            this.student = response.Data;
            console.log(response.Data.Name)
      }
    );
  }
    );
}
  update(index: number) {
    let student = index;
    this._http.put(`https://api.mohamed-sadek.com/Student/Put`, student).subscribe(
      (response: any) => {
        if (response.Success) {
          console.log(response);
          alert(response.Message);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
    // let student = this.students[index];
    // this._http.put(`https://api.mohamed-sadek.com/Student/Put`, student).subscribe(
    //   (response: any) => {
    //     if (response.Success) {
    //       console.log(response);
    //       alert(response.Message);
    //     }
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
}
