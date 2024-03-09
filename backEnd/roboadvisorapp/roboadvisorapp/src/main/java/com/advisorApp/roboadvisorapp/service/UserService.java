package com.advisorApp.roboadvisorapp.service;

import com.advisorApp.roboadvisorapp.dto.request.LoginRequestDTO;
import com.advisorApp.roboadvisorapp.dto.request.SignUpRequestDTO;
import com.advisorApp.roboadvisorapp.dto.response.LoginResponseDTO;
import com.advisorApp.roboadvisorapp.dto.response.SignUpResponseDTO;
import com.advisorApp.roboadvisorapp.entity.User;
import org.springframework.http.ResponseEntity;

public interface UserService {
    User getUserById(Long userId);
//    ResponseEntity<SignUpResponseDTO> signup(SignUpRequestDTO signUpRequestDTO);
//    ResponseEntity<LoginResponseDTO> login(LoginRequestDTO request);
//    SignUpResponseDTO resetPassword();
//    SignUpResponseDTO changePassword();

}