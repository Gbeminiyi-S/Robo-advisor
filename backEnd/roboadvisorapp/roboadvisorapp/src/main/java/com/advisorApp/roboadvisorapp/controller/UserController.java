package com.advisorApp.roboadvisorapp.controller;

import com.advisorApp.roboadvisorapp.dto.request.LoginRequestDTO;
import com.advisorApp.roboadvisorapp.dto.request.SignUpRequestDTO;
import com.advisorApp.roboadvisorapp.dto.response.LoginResponseDTO;
import com.advisorApp.roboadvisorapp.dto.response.SignUpResponseDTO;
import com.advisorApp.roboadvisorapp.entity.User;
import com.advisorApp.roboadvisorapp.service.UserService;
import com.advisorApp.roboadvisorapp.service.impl.UserServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@AllArgsConstructor
public class UserController {

    private UserService userService;

//    @PostMapping("/signup")
//    public ResponseEntity<SignUpResponseDTO> signup(@RequestBody SignUpRequestDTO signUpRequestDTO){
//        return userService.signup(signUpRequestDTO);
//    }
//    @PostMapping("/login")
//    public ResponseEntity<LoginResponseDTO> login(@RequestBody LoginRequestDTO loginRequestDTO) {
//        return userService.login(loginRequestDTO);
//    }

    @GetMapping("/{userId}")
    public ResponseEntity<User> getUser(@PathVariable Long userId) {
        User user = userService.getUserById(userId);
        return ResponseEntity.ok(user);
    }

    @GetMapping("/test")
    public ResponseEntity<String> getTest() {

        return ResponseEntity.ok("working");
    }
}