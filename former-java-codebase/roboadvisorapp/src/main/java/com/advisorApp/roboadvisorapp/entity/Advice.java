package com.advisorApp.roboadvisorapp.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import java.time.LocalDateTime;

@Entity
@Table(name="advice")
//@Data -- Known bug
@Getter
@Setter
public class Advice {

    // to add dto package
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private int id;

    @Column(name="recommendation")
    private String recommendation;

    @Column(name="questionnaire_id")
    private int questionnaireId; // to make foreign key
//    private Questionnaire questionnaire;

    @Column(name="date_created")
    @CreationTimestamp
    private LocalDateTime dateCreated;
}