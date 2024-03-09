package com.advisorApp.roboadvisorapp.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name="questionnaire")
public class Questionnaire {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name="investment_horizon")
    private int investmentHorizon;

    @Column(name="risk_tolerance")
    private String riskTolerance;

    @Column(name="investment_purpose")
    private String investmentPurpose;

    @Column(name="location")
    private String location;

    @Column(name="date_created", columnDefinition = "TIMESTAMP")
    @CreationTimestamp
    private LocalDateTime dateCreated;

//    @Column(name="user_id")
//    private int userId;
////    private User user;

//    @Column(name="advice_id")
    //@ForeignKey()
//    @OneToOne
//    @JoinColumn()
//    private int adviceId;
//    private Advice advice;
}