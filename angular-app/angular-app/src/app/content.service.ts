import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from './interface/course';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private apiUrl = 'http://your-api-url.com'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  dataCourses: Course[] = [
    {
      "titulo": "Introducción a HTML",
      "descripcion": "Este curso cubre los fundamentos del lenguaje HTML, enseñando a crear estructuras web utilizando etiquetas y atributos básicos.",
      "duracion": "4 horas",
      "imagen": "https://example.com/images/html-course.jpg"
    },
    {
      "titulo": "Fundamentos de CSS",
      "descripcion": "Aprende cómo estilizar páginas web con CSS. Este curso incluye la creación de diseños responsivos, tipografías, y animaciones básicas.",
      "duracion": "5 horas",
      "imagen": "https://example.com/images/css-course.jpg"
    },
    {
      "titulo": "JavaScript para Principiantes",
      "descripcion": "Este curso te enseña los fundamentos de JavaScript, como variables, funciones, y control de flujo, para empezar a desarrollar aplicaciones interactivas.",
      "duracion": "6 horas",
      "imagen": "https://example.com/images/js-course.jpg"
    },
    {
      "titulo": "Bases de Datos con SQL",
      "descripcion": "Aprende a interactuar con bases de datos usando SQL, cubriendo conceptos como SELECT, INSERT, UPDATE, DELETE y JOIN para gestionar la información.",
      "duracion": "7 horas",
      "imagen": "https://example.com/images/sql-course.jpg"
    },
    {
      "titulo": "Introducción a jQuery",
      "descripcion": "Este curso cubre las bases de jQuery, una biblioteca de JavaScript que facilita la manipulación del DOM y la creación de efectos dinámicos.",
      "duracion": "3 horas",
      "imagen": "https://example.com/images/jquery-course.jpg"
    },
    {
      "titulo": "Java: Fundamentos y Programación Orientada a Objetos",
      "descripcion": "Aprende los fundamentos de Java y cómo aplicar la programación orientada a objetos para desarrollar aplicaciones robustas y escalables.",
      "duracion": "8 horas",
      "imagen": "https://example.com/images/java-course.jpg"
    }
  ];
  

  /*getHtmlContent(): Observable<any> {
    return this.http.get(`${this.apiUrl}/html-content`);
  }*/
  getHtmlContent(): Course[] {
    return this.dataCourses;
  }

  getCssContent(): Observable<any> {
    return this.http.get(`${this.apiUrl}/css-content`);
  }

  getJavaContent(): Observable<any> {
    return this.http.get(`${this.apiUrl}/java-content`);
  }

  getJavascriptContent(): Observable<any> {
    return this.http.get(`${this.apiUrl}/javascript-content`);
  }

  getJqueryContent(): Observable<any> {
    return this.http.get(`${this.apiUrl}/jquery-content`);
  }

  getSqlContent(): Observable<any> {
    return this.http.get(`${this.apiUrl}/sql-content`);
  }
}
