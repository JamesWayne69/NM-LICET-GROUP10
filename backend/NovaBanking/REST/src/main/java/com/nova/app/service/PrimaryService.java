package com.nova.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.nova.exceptions.AuthenticationException;
import com.nova.model.AuthenticationModel;



@Service
public class PrimaryService {
	
	@Autowired
	JdbcTemplate jdbcTemplate;
	
	private final String validateUser = "SELECT COUNT(*) FROM account WHERE account_id = ? AND password = ?";
	
	public HttpStatus verifyUser(@RequestBody AuthenticationModel auth) {
	    int count = jdbcTemplate.queryForObject(validateUser, Integer.class, auth.getAccountID(), auth.getPassword());
	    if (count>0)
	    	return HttpStatus.OK;
	    else
	    	throw new AuthenticationException();
	}
}
