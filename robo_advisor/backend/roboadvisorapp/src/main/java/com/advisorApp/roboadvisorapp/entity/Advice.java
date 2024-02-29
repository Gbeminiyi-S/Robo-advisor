package com.advisorApp.roboadvisorapp.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
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

    @OneToOne(mappedBy = "advice", cascade = CascadeType.ALL, optional = true)
    private Questionnaire questionnaire;

    @Column(name="date_created")
    @CreationTimestamp
    private LocalDateTime dateCreated;
}
