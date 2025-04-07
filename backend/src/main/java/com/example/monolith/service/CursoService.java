package com.example.monolith.service;

import com.example.monolith.model.Curso;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CursoService {

    // Lista de cursos
    private List<Curso> cursos = List.of(
        new Curso("html","Introducción a HTML", "Este curso cubre los fundamentos del lenguaje HTML, enseñando a crear estructuras web utilizando etiquetas y atributos básicos.", "4 horas", "https://example.com/images/html-course.jpg"),
        new Curso("css", "Fundamentos de CSS", "Aprende cómo estilizar páginas web con CSS. Este curso incluye la creación de diseños responsivos, tipografías, y animaciones básicas.", "5 horas", "https://example.com/images/css-course.jpg"),
        new Curso("js", "JavaScript para Principiantes", "Este curso te enseña los fundamentos de JavaScript, como variables, funciones, y control de flujo, para empezar a desarrollar aplicaciones interactivas.", "6 horas", "https://example.com/images/js-course.jpg"),
        new Curso("sql", "Bases de Datos con SQL", "Aprende a interactuar con bases de datos usando SQL, cubriendo conceptos como SELECT, INSERT, UPDATE, DELETE y JOIN para gestionar la información.", "7 horas", "https://example.com/images/sql-course.jpg"),
        new Curso("jquery", "Introducción a jQuery", "Este curso cubre las bases de jQuery, una biblioteca de JavaScript que facilita la manipulación del DOM y la creación de efectos dinámicos.", "3 horas", "https://example.com/images/jquery-course.jpg"),
        new Curso("java", "Java: Fundamentos y Programación Orientada a Objetos", "Aprende los fundamentos de Java y cómo aplicar la programación orientada a objetos para desarrollar aplicaciones robustas y escalables.", "8 horas", "https://example.com/images/java-course.jpg")
    );

    // Método para obtener un curso por título
    public Curso obtenerCurso(String titulo) {
        return cursos.stream()
                     .filter(curso -> curso.getId().equalsIgnoreCase(titulo))
                     .findFirst()
                     .orElse(null); // Retorna null si no se encuentra el curso
    }

    // Método para obtener todos los cursos
    public List<Curso> obtenerCursos() {
        return cursos;
    }
}
