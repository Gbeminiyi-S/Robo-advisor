package com.advisorApp.roboadvisorapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin(origins = "*")
public class RoboadvisorApplication {

	public static void main(String[] args) {
		SpringApplication.run(RoboadvisorApplication.class, args);
	}

}
