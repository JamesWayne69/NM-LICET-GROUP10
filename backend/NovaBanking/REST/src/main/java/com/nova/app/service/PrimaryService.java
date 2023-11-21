package com.nova.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nova.app.repository.PrimaryRepository;
import com.nova.exceptions.AuthenticationException;
import com.nova.model.AuthenticationModel;
import com.nova.model.GenericStatusCode;



@Service
public class PrimaryService {
	
	@Autowired
	private PrimaryRepository primaryRepository;
	
	public GenericStatusCode verifyUser(AuthenticationModel auth) {
		if (primaryRepository.verifyUser(auth))
			return new GenericStatusCode(200);
		else
			throw new AuthenticationException();

	}
}
