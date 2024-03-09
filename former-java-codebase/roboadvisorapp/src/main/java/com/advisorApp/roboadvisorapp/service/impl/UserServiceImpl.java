package com.advisorApp.roboadvisorapp.service.impl;

import com.advisorApp.roboadvisorapp.dto.LoginRequest;
import com.advisorApp.roboadvisorapp.dto.Request;
import com.advisorApp.roboadvisorapp.dto.Response;
import com.advisorApp.roboadvisorapp.dto.UserInfo;
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
    public ResponseEntity<Response> signup(Request request) {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body(Response.builder()
                    .statusCode(400)
                    .responseMessage("Attempt to save duplicate user record")
                    .build());
        }
        User user = User.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .age(request.getAge())
                .build();

        User savedUser = userRepository.save(user);
        return ResponseEntity.ok(Response.builder()
                .statusCode(200)
                .responseMessage("SUCCESS")
                        .userInfo(modelMapper.map(savedUser, UserInfo.class))
                .build());
    }

    @Override
    public ResponseEntity<Response> login(LoginRequest request) {
        return null;
    }

    @Override
    public Response resetPassword() {
        return null;
    }

    @Override
    public Response changePassword() {
        return null;
    }
}
