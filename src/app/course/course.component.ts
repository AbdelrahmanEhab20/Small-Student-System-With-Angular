import { Component, OnInit } from '@angular/core';
import { Course } from './../models/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses: Course[] = [];

  constructor() {
    let course = new Course();
    course.Hours = 10;
    course.Name = "Angular";
    this.courses.push(course);

    let course2 = new Course();
    course2.Hours = 10;
    course2.Name = "React";
    this.courses.push(course2);


    let course3 = new Course();
    course3.Hours = 10;
    course3.Name = "C#";
    this.courses.push(course3);

  }

  ngOnInit(): void {
  }
  add(name: string, hours: number): void {
    let course = new Course();
    course.Hours = hours;
    course.Name = name;
    this.courses.push(course);
  }

  getCoursesCount(): number {
    return this.courses.length;
  }

}
