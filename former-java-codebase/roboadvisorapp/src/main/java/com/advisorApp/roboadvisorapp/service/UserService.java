package com.advisorApp.roboadvisorapp.service;

import com.advisorApp.roboadvisorapp.dto.LoginRequest;
import com.advisorApp.roboadvisorapp.dto.Request;
import com.advisorApp.roboadvisorapp.dto.Response;
import org.springframework.http.ResponseEntity;

public interface UserService {
    ResponseEntity<Response> signup(Request request);
    ResponseEntity<Response> login(LoginRequest request);
    Response resetPassword();
    Response changePassword();
}
