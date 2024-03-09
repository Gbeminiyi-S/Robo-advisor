package com.advisorApp.roboadvisorapp.service.impl;

import com.advisorApp.roboadvisorapp.entity.Questionnaire;
import com.advisorApp.roboadvisorapp.repository.QuestionnaireRepository;
import com.advisorApp.roboadvisorapp.repository.UserRepository;
import com.advisorApp.roboadvisorapp.service.QuestionnaireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QuestionnaireServiceImpl implements QuestionnaireService {

    @Autowired
    UserRepository userRepository;
    @Autowired
    QuestionnaireRepository questionnaireRepository;

    @Override
    public Questionnaire saveQuestionnaire(Questionnaire questionnaire, Long userId) {

//        User user = userRepository.findById(userId).get();
//        questionnaire.setUser(user);
        return questionnaireRepository.save(questionnaire);
    }

    @Override
    public List<Questionnaire> getQuestionnairesByUserId(Long userId) {
        return questionnaireRepository.findByUserId(userId);
    }

    @Override
    public Questionnaire findQuestionnaireByUserId(Long userId) {

        questionnaireRepository.findByUserId(userId);
        return null;
    }

//    @Override
////    public List<Questionnaire> getQuestionnaireByUserId(Long userId) {
//
//        return questionnaireRepository.findByUserId(userId);
//    }

    @Override
    public List<Questionnaire> getQuestionnaires() {
        return (List<Questionnaire>)questionnaireRepository.findAll();
    }

    @Override
    public Questionnaire getQuestionnaireById(Long id) {

        return  questionnaireRepository.findById(id).get();
    }

    @Override
    public void deleteQuestionnaire(Long id) {
        questionnaireRepository.deleteById(id);
    }
}
