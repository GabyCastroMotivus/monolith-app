import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { CourseTemplateComponent } from './courseTemplate/courseTemplate.component'; // Import CourseTemplateComponent
import { LoginComponent } from './login/login.component'; // Import LoginComponent
import { HomepageComponent } from './homepage/homepage.component'; // Import HomePageComponent

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    CourseTemplateComponent,
    LoginComponent, // Declare CourseTemplateComponent
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // Add HttpClientModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
