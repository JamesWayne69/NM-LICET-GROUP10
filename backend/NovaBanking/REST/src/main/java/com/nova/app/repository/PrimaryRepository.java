package com.nova.app.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

import com.nova.app.utility.enums.Payment;
import com.nova.app.utility.enums.Transaction;
import com.nova.model.AuthenticationModel;
import com.nova.model.SignUpModel;

@Component
public class PrimaryRepository {

	@Autowired
	JdbcTemplate jdbcTemplate;
	
	private final String validateUser = "SELECT COUNT(*) FROM accounts WHERE account_id = ? AND password = ?";
	private final String createUser = "INSERT INTO ACCOUNTS (name,balance,password,phone_number) VALUES (?,0.00,?,?)";
	private final String accountID = "Select account_ID from accounts where phone_number = ?";
	private final String countPhoneNumber = "Select count(*) from accounts where phone_number = ?";
	private final String balance = "Select balance from ACCOUNTS where account_id = ?";
	
	public Boolean verifyUser(AuthenticationModel auth) {
	    int count = jdbcTemplate.queryForObject(validateUser, Integer.class, auth.getAccountID(), auth.getPassword());
	    return count>0;
	}
	
	public Boolean createUser(SignUpModel signUp) {
		int count = jdbcTemplate.update(createUser, signUp.getName(), signUp.getPassword(),signUp.getPhoneNumber());
		return count>0;
	}
	
	public String getAccountID(String phoneNumber) {
		return jdbcTemplate.queryForObject(accountID, String.class, phoneNumber);
	}
	
	public Double getBalance(String accountID) {
		return jdbcTemplate.queryForObject(balance, Double.class, accountID);
	}
	
	public Boolean checkPhoneNumber(String phoneNumber) {
		int count = jdbcTemplate.queryForObject(countPhoneNumber, Integer.class, phoneNumber);
		return count >0;
	}
	
	public Boolean performTransaction(String accountID, Payment pay, double amount) {
		String updateCash = "update accounts set Balance = Balance";
		updateCash += pay.getSign(amount) + " where account_id = ?";
		int count = jdbcTemplate.update(updateCash,accountID);
		return count >0;
	}
	
	public Boolean addTransaction(String accountID,Transaction type,double amount, String recipientNam,String recipientID, double balance) {
		return null;
		
	}
}
