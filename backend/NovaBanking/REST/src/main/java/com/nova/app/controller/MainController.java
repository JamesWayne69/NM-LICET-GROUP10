package com.nova.app.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nova.app.repository.PrimaryRepository;
import com.nova.app.service.PrimaryService;
import com.nova.app.utility.enums.Payment;
import com.nova.model.AuthenticationModel;
import com.nova.model.GenericStatusCode;
import com.nova.model.SignUpModel;
import com.nova.model.SignUpResponse;


@RestController
@RequestMapping("/v1")
public class MainController {
	
	
	@Autowired
	private PrimaryService primaryService;
	@Autowired
	private PrimaryRepository pr;
	
    @GetMapping("/hello")
    public String sayHello() {
        return "Hello, World!";
    }
    
    @PostMapping("/login")
    public ResponseEntity<GenericStatusCode> login(@RequestBody AuthenticationModel auth) {    	
        return new ResponseEntity<>(primaryService.verifyUser(auth),HttpStatus.OK);
    }
    
    @PostMapping("/signup")
    public ResponseEntity<SignUpResponse>signUp(@RequestBody SignUpModel signUp){    	
    	return new ResponseEntity<>(primaryService.createUser(signUp),HttpStatus.OK);
    }
    
    @GetMapping("/{accountID}/{pay}/{amount}")
    public ResponseEntity<SignUpResponse>performTransaction(@PathVariable String accountID,@PathVariable Payment pay, @PathVariable double amount){
    	pr.performTransaction(accountID, pay,amount);
    	return null;
    }

}
