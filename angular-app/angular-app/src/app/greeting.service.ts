import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {
  private apiUrl = 'http://localhost:8080/api/greeting';

  constructor(private http: HttpClient) { }

  getGreeting(): Observable<string> {
    return this.http.get<string>(this.apiUrl);
  }
}
