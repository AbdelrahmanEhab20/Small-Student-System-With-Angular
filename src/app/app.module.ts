import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmployeeComponent } from './employee/employee.component';
import { CourseComponent } from './course/course.component';
import { StudentComponent } from './student/student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { StudentstableComponent } from './studentstable/studentstable.component';
import { DetailsComponent } from './details/details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';
import { MaxLengthPipe } from './pipes/max-length.pipe';
import { RatingComponent } from './rating/rating.component';

import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CourseComponent,
    StudentComponent,
    HomeComponent,
    StudentstableComponent,
    DetailsComponent,
    NotFoundComponent,
    CustomPipePipe,
    MaxLengthPipe,
    RatingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
