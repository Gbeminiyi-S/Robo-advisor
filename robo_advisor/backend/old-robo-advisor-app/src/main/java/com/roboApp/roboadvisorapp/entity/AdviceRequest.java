package com.roboApp.roboadvisorapp.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="advice_request")
@Data
public class AdviceRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="email")
    private String email;

    @Column(name="age")
    private int age;

    @Column(name="investment_horizon")
    private String investmentHorizon;

    @Column(name="risk_tolerance")
    private String riskTolerance;

    @Column(name="investment_purpose")
    private String investmentPurpose;

    @Column(name="location")
    private String location;


}
