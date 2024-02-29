package com.roboApp.roboadvisorapp.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="robo_recommendation")
@Data
public class RoboRecommendation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name="user_name")
    private String userName;

    @Column(name="user_email")
    private String userEmail;

    @Column(name="recommendation")
    private String recommendation;

    @Column(name = "request_id")
    private Long requestId;
}
