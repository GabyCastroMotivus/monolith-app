package com.example.monolith.controller;

import org.springframework.web.bind.annotation.CrossOrigin; // Import CrossOrigin
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity; // Import ResponseEntity
import org.springframework.http.HttpStatus; // Import HttpStatus

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200") // Allow CORS for Angular app
public class ApiController {

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
}
