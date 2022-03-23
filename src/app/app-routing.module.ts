import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StudentComponent } from './student/student.component';
import { StudentstableComponent } from './studentstable/studentstable.component';
const routes: Routes = [
  { path: 'home', component: StudentComponent },
  { path: 'students/index', component: StudentstableComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'details', component: DetailsComponent },
  { path: '', component: StudentComponent },
  { path: '**', component: NotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
