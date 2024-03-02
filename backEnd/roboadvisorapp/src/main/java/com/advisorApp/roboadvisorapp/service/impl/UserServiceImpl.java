package com.advisorApp.roboadvisorapp.service.impl;

import com.advisorApp.roboadvisorapp.dto.request.LoginRequestDTO;
import com.advisorApp.roboadvisorapp.dto.request.SignUpRequestDTO;
import com.advisorApp.roboadvisorapp.dto.response.LoginResponseDTO;
import com.advisorApp.roboadvisorapp.dto.response.SignUpResponseDTO;
import com.advisorApp.roboadvisorapp.dto.response.UserInfo;
import com.advisorApp.roboadvisorapp.entity.Role;
import com.advisorApp.roboadvisorapp.entity.User;
import com.advisorApp.roboadvisorapp.repository.UserRepository;
import com.advisorApp.roboadvisorapp.service.UserService;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {
    private UserRepository userRepository;
    private ModelMapper modelMapper;
    private PasswordEncoder passwordEncoder;
    private LoginRequestDTO loginRequestDTO;


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
                .role(Role.valueOf("ROLE_ADMIN"))
                .build();

        User savedUser = userRepository.save(user);
        return ResponseEntity.ok(SignUpResponseDTO.builder()
                .statusCode(200)
                .responseMessage("SUCCESS")
                        .userInfo(modelMapper.map(savedUser, UserInfo.class))
                .build());
    }

    @Override
    public ResponseEntity<LoginResponseDTO> login(LoginRequestDTO loginRequestDTO) {
        if (userRepository.findByEmail(loginRequestDTO.getEmail()).isPresent()) {
            Optional<User> users = userRepository.findByEmail(loginRequestDTO.getEmail());

            User user = users.get();
            String userPassword = user.getPassword();
            if (passwordEncoder.matches(loginRequestDTO.getPassword(), userPassword)){
                Authentication authentication = authenticationManager.authenticate(
                        new UsernamePasswordAuthenticationToken(loginRequestDTO.getEmail(), loginRequestDTO.getPassword())
                );
                return ResponseEntity.ok(LoginResponseDTO.builder()
                        .statusCode(200)
                        .responseMessage("Successfully logged in")
                        .userName(user.getFirstName())
                        .build());
            }
            else {
                return ResponseEntity.badRequest().body(LoginResponseDTO.builder()
                        .statusCode(400)
                        .responseMessage("Password does not match!")
                        .build());
            }
        }

        return ResponseEntity.badRequest().body(LoginResponseDTO.builder()
                .statusCode(400)
                .responseMessage("Email not Found")
                .build());
    }

    @Override
    public SignUpResponseDTO resetPassword() {
        return null;
    }

    @Override
    public SignUpResponseDTO changePassword() {
        return null;
    }

    @Autowired
    AuthenticationManager authenticationManager;
}
