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
    QuestionnaireService  questionnaireService;

//    public ResponseEntity

//    @GetMapping("/user/{userId}")
//    public ResponseEntity<List<Questionnaire>> getQuestionnaire(@PathVariable Long userId) {
//
//        return new ResponseEntity<>(questionnaireService.getQuestionnaireByUserId(userId), HttpStatus.OK);
//    }

//    @GetMapping("/{id}")
//    public ResponseEntity<Questionnaire> getQuestionnaire(@PathVariable Long id){
//
//        return new ResponseEntity<>(questionnaireService.getQuestionnaireById(id), HttpStatus.OK);
//    }

    @PostMapping("/user/{userId}")
    public ResponseEntity<Questionnaire> saveQuestionnaire(@RequestBody Questionnaire questionnaire, @PathVariable Long userId ) {

        return new ResponseEntity<>(questionnaireService.saveQuestionnaire(questionnaire, userId), HttpStatus.CREATED);
    }

}
