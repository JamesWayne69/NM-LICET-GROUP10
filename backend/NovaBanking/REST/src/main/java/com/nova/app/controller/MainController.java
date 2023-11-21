package com.nova.app.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nova.app.service.PrimaryService;
import com.nova.model.AuthenticationModel;


@RestController
@RequestMapping("/v1")
public class MainController {
	
	
	@Autowired
	private PrimaryService primaryService;

    @GetMapping("/hello")
    public String sayHello() {
        return "Hello, World!";
    }
    
    @PostMapping("/login")
    public ResponseEntity<HttpStatus> Login(AuthenticationModel auth) {
    	System.out.println(auth.getAccountID()+auth.getPassword());
        return new ResponseEntity<>(primaryService.verifyUser(auth));
    }
    

}
