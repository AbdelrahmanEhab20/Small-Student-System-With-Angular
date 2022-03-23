import { Component, OnInit } from '@angular/core';
import { Student } from './../models/student';
import { MobileService } from './../services/mobile.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  students: Student[] = [];
  isPageLoaded = false;
  formCreation:any;
  // mobileservice: MobileService = new MobileService(); private inside Constructor For Dependcy Ingection
  constructor(private _http: HttpClient,private _formBuilder:FormBuilder,private _router:Router) { }

  ngOnInit(): void {
    this.formCreation=this._formBuilder.group({
      FirstName:[ "",[Validators.required,Validators.minLength(3),Validators.maxLength(13)]],
      LastName:[ "",[Validators.required,Validators.minLength(3),Validators.maxLength(13)]],
      Age: ["22",[Validators.required,Validators.maxLength(13)]],
      Mobile: ["0151565161575",[Validators.required,Validators.minLength(3),Validators.maxLength(13)]],
      Email: ["aaaa@example.com",[Validators.required,Validators.email,Validators.minLength(3),Validators.maxLength(25)]]
      //Validators.pattern ----> Custom Validation (REGEX)
    });

    // this.getStudents();
    // this._http.get("https://api.mohamed-sadek.com/Student/Get").subscribe(
    //   (response: any) => {
    //     this.students = response.Data;
    //     this.isPageLoaded = true;
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    //);
  }


  // getStudents() {
  //   this._http.get("https://api.mohamed-sadek.com/Student/Get").subscribe(
  //     (response: any) => {
  //       this.students = response.Data;
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
  //firstName: string, lastName: string, age: number, mobile: string, email: string
  add() {
    // if (!(firstName && lastName && age)) {
    //   alert("Can't Add Student With Empty Data");
    //   return;
    // }
    //else {
      // let student = new Student();
      // student.FirstName = firstName;
      // student.LastName = lastName;
      // student.Age = age;
      // student.Mobile = mobile;
      // student.Email = email;

      const student=this.formCreation.value;
      this._http.post("https://api.mohamed-sadek.com/Student/POST", student).subscribe(
        (response: any) => {
          if(response.Success){
            console.log(student);
            this.students.push(student);
            alert(response.Message);
            this._router.navigateByUrl('/students/index')
          }
        },
        (error) => {
          console.log(error);
        }
      )
    //}
  }
  // update(index: number) {
  //   let student = this.students[index];
  //   this._http.put(`https://api.mohamed-sadek.com/Student/Put`, student).subscribe(
  //     (response: any) => {
  //       if (response.Success) {
  //         console.log(response);
  //         alert(response.Message);
  //       }
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

  // delete(index: number) {
  //   let student = this.students[index];
  //   student.IsDeleting = true;
  //   this._http.delete(`https://api.mohamed-sadek.com/Student/Delete?id=${student.ID}`).subscribe(
  //     (response: any) => {
  //       if (response.Success) {
  //         this.students.splice(index, 1);
  //         alert(response.Message);
  //       }
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

  // coustStudenets(): number {
  //   const count = this.students.length;
  //   return count;
  // }
}
