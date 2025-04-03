import { Component, OnInit } from '@angular/core';
import { Course } from '../interface/course';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  courses: Course[] = [];

  constructor() {}

  ngOnInit(): void {
  }
  
  

}
