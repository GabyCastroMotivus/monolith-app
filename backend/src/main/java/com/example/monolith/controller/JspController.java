package com.example.monolith.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Controller responsible for handling JSP view-related endpoints.
 * Maps HTTP requests to JSP views in the application.
 */
@Controller
public class JspController {

    /**
     * Returns the "hello" JSP view when /jsp/hello endpoint is accessed.
     *
     * @return the view name to be resolved by the view resolver
     */
    @GetMapping("/jsp/hello")
    public String helloJsp() {
        return "hello";
    }
}