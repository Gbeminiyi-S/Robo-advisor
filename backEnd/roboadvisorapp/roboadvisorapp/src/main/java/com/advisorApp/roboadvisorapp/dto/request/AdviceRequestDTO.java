package com.advisorApp.roboadvisorapp.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AdviceRequestDTO {

    private int age;
    private String investmentPurpose;
    private int investmentHorizon;
    private String investmentKnowledge;
    private String riskTolerance;
    private Float amount;
    private String currency;
    private String location;

}
