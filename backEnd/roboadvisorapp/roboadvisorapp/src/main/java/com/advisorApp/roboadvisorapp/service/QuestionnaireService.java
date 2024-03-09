package com.advisorApp.roboadvisorapp.service;

import com.advisorApp.roboadvisorapp.entity.Questionnaire;

import java.util.List;

public interface QuestionnaireService {

    Questionnaire getQuestionnaireById(Long Id);

    Questionnaire saveQuestionnaire(Questionnaire questionnaire, Long userId);

    List<Questionnaire> getQuestionnairesByUserId(Long userId);

    Questionnaire findQuestionnaireByUserId(Long userId);

    void deleteQuestionnaire(Long Id);

    List<Questionnaire> getQuestionnaires();
}
