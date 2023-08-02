package com.ust.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@CrossOrigin({"http://localhost:4200/","*"})
public class SecurityAug02Application {
	@Autowired
	private EmailService es;
	
	@GetMapping
	public String sendEmail()
	{
		
		String otp="";
		for(int i=0;i<6;i++)
		{
			int digit = (int) (Math.random()*10);
			otp+=digit;
		}
		es.send("fibin404@gmail.com", "hi", otp+" is the OTP to signup to our website. Do not share OTP with anyone.");
		return otp;
	}

	public static void main(String[] args) {
		SpringApplication.run(SecurityAug02Application.class, args);
	}

}
