package com.advisorApp.roboadvisorapp.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.rest.core.annotation.RestResource;

import java.time.LocalDateTime;


@Entity
@Table(name="advice")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Advice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="recommendation", nullable = false)
    private String recommendation;


    @OneToOne
    @JoinColumn(name = "questionnaire_id")
    @RestResource(path = "questionnaire", rel="questionnaire")
    private Questionnaire questionnaire;

    @Column(name="date_created")
    @CreationTimestamp
    private LocalDateTime dateCreated;
}
