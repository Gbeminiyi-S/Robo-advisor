package com.advisorApp.roboadvisorapp.service.impl;

import com.advisorApp.roboadvisorapp.dto.request.LoginRequest;
import com.advisorApp.roboadvisorapp.dto.request.SignUpRequestDTO;
import com.advisorApp.roboadvisorapp.dto.response.SignUpResponseDTO;
import com.advisorApp.roboadvisorapp.entity.User;
import com.advisorApp.roboadvisorapp.repository.UserRepository;
import com.advisorApp.roboadvisorapp.service.UserService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;
    private ModelMapper modelMapper;
    private PasswordEncoder passwordEncoder;
    @Override
    public ResponseEntity<SignUpResponseDTO> signup(SignUpRequestDTO signUpRequestDTO) {
        if (userRepository.findByEmail(signUpRequestDTO.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body(SignUpResponseDTO.builder()
                    .statusCode(400)
                    .responseMessage("Attempt to save duplicate user record")
                    .build());
        }
        User user = User.builder()
                .email(signUpRequestDTO.getEmail())
                .password(passwordEncoder.encode(signUpRequestDTO.getPassword()))
                .firstName(signUpRequestDTO.getFirstName())
                .lastName(signUpRequestDTO.getLastName())
                .age(signUpRequestDTO.getAge())
                .build();

        User savedUser = userRepository.save(user);
        return ResponseEntity.ok(SignUpResponseDTO.builder()
                .statusCode(200)
                .responseMessage("SUCCESS")
                        .userInfo(modelMapper.map(savedUser, SignUpResponseDTO.UserInfo.class))
                .build());
    }

    @Override
    public ResponseEntity<SignUpResponseDTO> login(LoginRequest request) {
        return null;
    }

    @Override
    public SignUpResponseDTO resetPassword() {
        return null;
    }

    @Override
    public SignUpResponseDTO changePassword() {
        return null;
    }
}
