package com.advisorApp.roboadvisorapp.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import java.time.LocalDateTime;


@Entity
@Table(name="questionnaire")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Questionnaire {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;


    @Column(name="investment_horizon", nullable = false)
    private int investmentHorizon;

    @Column(name="risk_tolerance", nullable = false)
    private String riskTolerance;

    @Column(name="amount", nullable=false)
    private Float amount;

    @Column(name="currency", nullable = false)
    private String currency;

    @Column(name="investment_purpose", nullable = false)
    private String investmentPurpose;

    @Column(name="location", nullable = false)
    private String location;

    @Column(name="investment_knowledge", nullable = false)
    private String investmentKnowledge;

    @Column(name="date_created", nullable = false)
    @CreationTimestamp
    private LocalDateTime dateCreated;

    @ManyToOne(cascade = CascadeType.ALL, optional = true)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    @OneToOne(cascade = CascadeType.ALL, optional = true)
    @JoinColumn(name = "advice_id", referencedColumnName = "id")
    private Advice advice;

}
