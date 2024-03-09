package com.advisorApp.roboadvisorapp.controller;

import com.advisorApp.roboadvisorapp.entity.Questionnaire;
import com.advisorApp.roboadvisorapp.service.QuestionnaireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/questionnaires")
//@CrossOrigin(origins = "http://localhost:4200")
public class QuestionnaireController {

    @Autowired
    QuestionnaireService  questionnaireService;

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Questionnaire>> getQuestionnairesByUserId(@PathVariable Long userId) {
        List<Questionnaire> questionnaires = questionnaireService.getQuestionnairesByUserId(userId);
        return ResponseEntity.ok(questionnaires);
    }
    @PostMapping("/user/{userId}")
    public ResponseEntity<Questionnaire> saveQuestionnaire(@RequestBody Questionnaire questionnaire, @PathVariable Long userId ) {

        return new ResponseEntity<>(questionnaireService.saveQuestionnaire(questionnaire, userId), HttpStatus.CREATED);
    }
}
