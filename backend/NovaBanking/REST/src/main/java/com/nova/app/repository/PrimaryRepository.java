package com.nova.app.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.nova.model.AuthenticationModel;

@Service
public class PrimaryRepository {

	@Autowired
	JdbcTemplate jdbcTemplate;
	
	private final String validateUser = "SELECT COUNT(*) FROM accounts WHERE account_id = ? AND password = ?";
	
	public Boolean verifyUser(AuthenticationModel auth) {
	    int count = jdbcTemplate.queryForObject(validateUser, Integer.class, auth.getAccountID(), auth.getPassword());
	    return count>0;
	}
}
