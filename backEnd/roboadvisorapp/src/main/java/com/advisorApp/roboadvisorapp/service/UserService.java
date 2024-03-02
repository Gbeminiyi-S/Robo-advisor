package com.advisorApp.roboadvisorapp.service;

import com.advisorApp.roboadvisorapp.dto.request.LoginRequestDTO;
import com.advisorApp.roboadvisorapp.dto.request.SignUpRequestDTO;
import com.advisorApp.roboadvisorapp.dto.response.LoginResponseDTO;
import com.advisorApp.roboadvisorapp.dto.response.SignUpResponseDTO;
import org.springframework.http.ResponseEntity;

public interface UserService {
    ResponseEntity<SignUpResponseDTO> signup(SignUpRequestDTO signUpRequestDTO);
    ResponseEntity<LoginResponseDTO> login(LoginRequestDTO request);
    SignUpResponseDTO resetPassword();
    SignUpResponseDTO changePassword();
}
