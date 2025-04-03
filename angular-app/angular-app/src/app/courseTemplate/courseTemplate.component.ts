import { Component, OnInit } from '@angular/core';
import { Course } from '../interface/course'; // Import the Course interface
import { ContentService } from '../content.service';

@Component({
  selector: 'app-course-template',
  templateUrl: './courseTemplate.component.html',
  styleUrls: ['./courseTemplate.component.css']
})
export class CourseTemplateComponent implements OnInit {
  //@Input() courseName: Course[] = []; // Initialize courseName property
  courses: Course[] = []; // Initialize courses property

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.courses =this.contentService.getHtmlContent();
  }
}
