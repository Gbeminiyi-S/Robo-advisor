package com.advisorApp.roboadvisorapp.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class  Request {
    private String email;
    private String password;
    private String firstName;
    private String lastName;
    private int age;
}
