package com.example.monolith.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity; // Import ResponseEntity
import org.springframework.http.HttpStatus; // Import HttpStatus
import com.example.monolith.service.CursoService;
import com.example.monolith.model.Curso;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200") // Allow CORS for Angular app
public class ApiController {
    private final CursoService cursoService;

    public ApiController (CursoService cursoService) {
        this.cursoService = cursoService;
    }

    @GetMapping("/greeting")
    public ResponseEntity<Object> getGreeting() {
        return new ResponseEntity<>(new Greeting("Hello from the REST API!"), HttpStatus.OK);
    }

    // Inner class to represent the greeting message
    public static class Greeting {
        private String message;

        public Greeting(String message) {
            this.message = message;
        }

        public String getMessage() {
            return message;
        }
    }

    // Endpoint para obtener un curso por título
    @GetMapping("/cursos/{titulo}")
    public Curso obtenerCursoPorTitulo(@PathVariable String titulo) {
        return cursoService.obtenerCurso(titulo);
    }

    @GetMapping("/cursos")
    public List<Curso> obtenerTodosLosCursos() {
        return cursoService.obtenerCursos(); // Llamada al servicio para obtener la lista completa de cursos
    }

}
