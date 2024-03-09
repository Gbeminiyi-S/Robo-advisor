package com.advisorApp.roboadvisorapp.controller;

import com.advisorApp.roboadvisorapp.entity.Advice;
import com.advisorApp.roboadvisorapp.entity.Questionnaire;
import com.advisorApp.roboadvisorapp.service.AdviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.nio.file.Path;

@RestController
@RequestMapping("/advice")
public class AdviceController {

//    @Autowired
    RestTemplate restTemplate;
//
//    @Bean
//    RestTemplate restTemplate() {
//        return new RestTemplate();
//    }

    @Autowired
    public AdviceService adviceService;

    @GetMapping("/{adviceId}")
    public ResponseEntity<Advice> getAdvice(@PathVariable Long id) {

        return new ResponseEntity<>(adviceService.getAdviceById(id), HttpStatus.OK);
    }

//    @GetMapping("/questionnaire/{questionnaireId}")
//    public ResponseEntity<Advice> getAdviceByQuestionnaireId(@PathVariable Long questionnaireId) {
//
//        return new ResponseEntity<>(adviceService.getAdviceByQuestionnaireId(questionnaireId), HttpStatus.OK);
//    }

    public String getRecommendationFromGemini(String apiUrl) {

        ResponseEntity<String> response = restTemplate.getForEntity(apiUrl, String.class);
        return response.getBody();
    }

}
