package com.advisorApp.roboadvisorapp.repository;


import com.advisorApp.roboadvisorapp.entity.Questionnaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

public interface QuestionnaireRepository extends CrudRepository<Questionnaire, Long> {

    List<Questionnaire> findByUserId(Long userId);
}


