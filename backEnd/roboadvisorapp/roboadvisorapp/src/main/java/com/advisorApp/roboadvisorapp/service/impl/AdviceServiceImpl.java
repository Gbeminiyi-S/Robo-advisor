package com.advisorApp.roboadvisorapp.service.impl;

import com.advisorApp.roboadvisorapp.dto.request.AdviceRequestDTO;
import com.advisorApp.roboadvisorapp.entity.Advice;
import com.advisorApp.roboadvisorapp.repository.AdviceRepository;
import com.advisorApp.roboadvisorapp.service.AdviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class AdviceServiceImpl implements AdviceService {

    @Autowired
    public AdviceRepository adviceRepository;

//    @Autowired
//    public RestTemplate restTemplate;

    @Bean
    public RestTemplate restTemplate() {
        return new RestTemplate();
    }


    @Override
    public String fetchAdvice() {
        String apiUrl = "http://localhost:8000/recommendations";
        ResponseEntity<String> response = restTemplate().getForEntity(apiUrl, String.class);
        return response.getBody();
    }

    @Override
    public Advice getAdviceById(Long id) {

       return adviceRepository.findById(id).get();
    }

    @Override
    public Advice getByQuestionnaireId(Long questionnaireId) {
        return null;
    }


    @Override
    public Advice saveAdvice(Advice advice, String recommendation) {
        advice.setRecommendation(recommendation);
        return adviceRepository.save(advice);
    }

    @Override
    public void deleteAdvice(Long id) {

        adviceRepository.deleteById(id);
    }

}
