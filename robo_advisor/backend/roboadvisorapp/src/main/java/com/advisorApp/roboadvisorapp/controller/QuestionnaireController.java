package com.advisorApp.roboadvisorapp.controller;

import com.advisorApp.roboadvisorapp.entity.Questionnaire;
import com.advisorApp.roboadvisorapp.service.QuestionnaireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/questionnaire")
public class QuestionnaireController {

    @Autowired
    public QuestionnaireService  questionnaireService;

    @GetMapping("/questionnaires")
    public ResponseEntity<List<Questionnaire>> getQuestionnaires(){

        return new ResponseEntity<List<Questionnaire>>(questionnaireService.getQuestionnaires(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Questionnaire> getQuestionnaire(@PathVariable Long id){

        return new ResponseEntity<>(questionnaireService.getQuestionnaireById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Questionnaire> saveQuestionnaire(@RequestBody Questionnaire questionnaire) {

        return new ResponseEntity<>(questionnaireService.saveQuestionnaire(questionnaire), HttpStatus.CREATED);
    }

//    @GetMapping
//    public List<Questionnaire> getAllQuestionnaires() {
//
//        List<Questionnaire> questionnaires = questionnaireService.get
//
//        return questionnaires;
//    }

}
