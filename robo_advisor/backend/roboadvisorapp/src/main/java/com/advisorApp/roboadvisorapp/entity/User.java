package com.advisorApp.roboadvisorapp.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import java.time.LocalDateTime;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Getter
@Setter
@Builder
@Table(name="user")
public class User {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="email", nullable = false)
    private String email;

    @Column(name="password", nullable = false)
    private String password;

    @Column(name="first_name", nullable = false)
    private String firstName;

    @Column(name="last_name", nullable = false)
    private String lastName;

    @Column(name="age", nullable = false)
    private int age;

    @Column(name="signup_date")
    @CreationTimestamp
    private LocalDateTime signupDate;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Questionnaire> userQuestions;
}
