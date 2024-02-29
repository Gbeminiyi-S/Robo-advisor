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

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class UserInfo {
        private String email;
        private String password;
        private String firstName;
        private String lastName;
        private int age;
    }
}
