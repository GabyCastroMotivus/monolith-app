import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { LoginComponent } from './login/login.component'; // Import LoginComponent
import { HomepageComponent } from './homepage/homepage.component'; // Import HomePageComponent
import { CourseTemplateComponent } from './courseTemplate/courseTemplate.component'; // Import CourseTemplateComponent

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'login', component: LoginComponent }, // Add route for LoginComponent
  { path: 'homepage', component: HomepageComponent }, // Add route for HomePageComponent
  { path: 'courseTemplate', component: CourseTemplateComponent }, // Add route for CourseTemplat
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
