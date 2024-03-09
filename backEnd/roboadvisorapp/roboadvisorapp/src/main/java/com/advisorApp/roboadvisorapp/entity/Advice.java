package com.advisorApp.roboadvisorapp.entity;

import com.advisorApp.roboadvisorapp.controller.AdviceController;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDateTime;


@Entity
@Table(name="advice")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Advice {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="recommendation", columnDefinition = "TEXT", nullable = false)
    private String recommendation;

    @OneToOne
    @JoinColumn(name = "questionnaire_id")
    @RestResource(path = "questionnaire", rel="questionnaire")
    private Questionnaire questionnaire;

    @Column(name="date_created")
    @CreationTimestamp
    private LocalDateTime dateCreated;


    @JsonFormat(shape = JsonFormat.Shape.STRING)
    public String getRecommendation() {
        return recommendation;
    }



}
