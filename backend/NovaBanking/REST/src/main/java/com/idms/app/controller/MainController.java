package com.idms.app.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api")
public class MainController {
	
	@Autowired
	JdbcTemplate jdbcTemplate;

    @GetMapping("/hello")
    public String sayHello() {
        return "Hello, World!";
    }
    
    @GetMapping("/test")
    public void updateEmployeeSalary() {
        String sql = "UPDATE login SET password = ? WHERE user_id = ?";
        jdbcTemplate.update(sql, "try", 1);
    }  
    @GetMapping("/test1")
    public String checkVm() {
        return System.getProperty("passWord");
    }  
}
