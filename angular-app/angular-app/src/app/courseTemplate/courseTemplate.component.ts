import { Component, OnInit } from '@angular/core';
import { Course } from '../interface/course';
import { ContentService } from '../content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-template',
  templateUrl: './courseTemplate.component.html',
  styleUrls: ['./courseTemplate.component.css']
})
export class CourseTemplateComponent implements OnInit {
  isSidebarOpen = false;
  courses: Course[] = [];

  constructor(
    private contentService: ContentService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.contentService.getAllCourses().subscribe({
      next: (data: Course[]) => {
        this.courses = data;
      },
      error: (err) => {
        console.error("Error al obtener los cursos: ", err);
      }
    });
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  signOut() {
    this.router.navigate(['/login']);
  }
}
