package com.advisorApp.roboadvisorapp.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class SignUpRequestDTO {
    private String email;
    private String password;
    private String firstName;
    private String lastName;
    private int age;
}