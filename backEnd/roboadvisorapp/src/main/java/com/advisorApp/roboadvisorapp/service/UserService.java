package com.advisorApp.roboadvisorapp.service;

import com.advisorApp.roboadvisorapp.dto.request.LoginRequest;
import com.advisorApp.roboadvisorapp.dto.request.SignUpRequestDTO;
import com.advisorApp.roboadvisorapp.dto.response.SignUpResponseDTO;
import org.springframework.http.ResponseEntity;

public interface UserService {
    ResponseEntity<SignUpResponseDTO> signup(SignUpRequestDTO signUpRequestDTO);
    ResponseEntity<SignUpResponseDTO> login(LoginRequest request);
    SignUpResponseDTO resetPassword();
    SignUpResponseDTO changePassword();
}
