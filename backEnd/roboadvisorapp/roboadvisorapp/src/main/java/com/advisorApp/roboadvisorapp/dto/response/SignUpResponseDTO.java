package com.advisorApp.roboadvisorapp.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class SignUpResponseDTO {
    private int statusCode;
    private String responseMessage;
    private UserInfo userInfo;

}