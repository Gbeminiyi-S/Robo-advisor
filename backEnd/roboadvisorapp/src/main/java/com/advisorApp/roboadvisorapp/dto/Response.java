package com.advisorApp.roboadvisorapp.dto;

import com.advisorApp.roboadvisorapp.entity.Questionnaire;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Collection;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class Response {
    private int statusCode;
    private String responseMessage;
    private UserInfo userInfo;
}
