package com.advisorApp.roboadvisorapp.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Getter
@Setter
@Data
@Builder
@Table(name="user")
public class User {
//    public User() {
//
//        userQuestions = new ArrayList<Questionnaire>();
//    }
    @Id
    @Column(name="id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="email")
    private String email;

    @Column(name="password")
    private String password;

    @Column(name="first_name")
    private String firstName;

    @Column(name="last_name")
    private String lastName;

    @Column(name="age")
    private int age;

    @Column(name="signup_date")
    @CreationTimestamp
    private LocalDateTime signupDate;

//    private Collection<Questionnaire> userQuestions;
}