import { Component, OnInit } from '@angular/core';
import { GreetingService } from '../greeting.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  greeting: string = ''; // Initialize greeting property

  constructor(private greetingService: GreetingService) { }

  ngOnInit(): void {
    this.greetingService.getGreeting().subscribe(
      (data: any) => {
        this.greeting = data.message;
      },
      (error) => {
        console.error('Error fetching greeting:', error);
      }
    );
  }
}
