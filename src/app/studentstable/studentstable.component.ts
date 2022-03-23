import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../models/student';

import { registerLocaleData } from '@angular/common';
import localeAr from '@angular/common/locales/ar-EG'
registerLocaleData(localeAr);


@Component({
  selector: 'app-studentstable',
  templateUrl: './studentstable.component.html',
  styleUrls: ['./studentstable.component.css']
})
export class StudentstableComponent implements OnInit {
  students: Student[] = [];
  isPageLoaded = false;
  currentdate:Date=new Date();
  // mobileservice: MobileService = new MobileService(); private inside Constructor For Dependcy Ingection
  constructor(private _http: HttpClient,private _router:Router) { 

  }

  ngOnInit(): void {
    this._http.get("https://api.mohamed-sadek.com/Student/Get").subscribe(
      (response: any) => {
        this.students = response.Data;
        this.isPageLoaded = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  // add(firstName: string, lastName: string, age: number, mobile: string, email: string): void {
  //   if (!(firstName && lastName && age)) {
  //     alert("Can't Add Student With Empty Data");
  //     return;
  //   }
  //   else {
  //     let student = new Student();
  //     student.FirstName = firstName;
  //     student.LastName = lastName;
  //     student.Age = age;
  //     student.Mobile = mobile;
  //     student.Email = email;

  //     this._http.post("https://api.mohamed-sadek.com/Student/POST", student).subscribe(
  //       (response: any) => {
  //         this.students.push(student);
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     )
  //   }
  // }
  // index: number
  update(index:number) {
    let student = this.students[index];
    this._router.navigateByUrl(`/details/${student.ID}`)
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

  delete(index: number) {
    let student = this.students[index];
    student.IsDeleting = true;
    this._http.delete(`https://api.mohamed-sadek.com/Student/Delete?id=${student.ID}`).subscribe(
      (response: any) => {
        if (response.Success) {
          this.students.splice(index, 1);
          alert(response.Message);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  coustStudenets(): number {
    const count = this.students.length;
    return count;
  }

}
