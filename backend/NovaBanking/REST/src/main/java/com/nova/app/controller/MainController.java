package com.nova.app.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nova.app.service.PrimaryService;
import com.nova.model.AuthenticationModel;
import com.nova.model.GenericStatusCode;


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
    public ResponseEntity<GenericStatusCode> Login(@RequestBody AuthenticationModel auth) {    	
        return new ResponseEntity<>(primaryService.verifyUser(auth),HttpStatus.OK);
    }
    

}
