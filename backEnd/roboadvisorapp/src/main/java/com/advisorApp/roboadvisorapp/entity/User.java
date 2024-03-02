package com.advisorApp.roboadvisorapp.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import java.time.LocalDateTime;
import java.util.List;

@RequiredArgsConstructor
@NoArgsConstructor
@Entity
@Getter
@Setter
@Table(name="user")
public class User {

    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull
    @Column(name="email", nullable = false)
    private String email;

    @NonNull
    @Column(name="password", nullable = false)
    private String password;

    @NonNull
    @Column(name="first_name", nullable = false)
    private String firstName;

    @NonNull
    @Column(name="last_name", nullable = false)
    private String lastName;

    @NonNull
    @Column(name="age", nullable = false)
    private int age;

    @Column(name="signup_date")
    @CreationTimestamp
    private LocalDateTime signupDate;

    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<Questionnaire> userQuestions;
}
