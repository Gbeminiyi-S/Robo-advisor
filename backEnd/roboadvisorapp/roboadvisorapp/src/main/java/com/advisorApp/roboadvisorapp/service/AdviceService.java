package com.advisorApp.roboadvisorapp.service;

import com.advisorApp.roboadvisorapp.dto.request.AdviceRequestDTO;
import com.advisorApp.roboadvisorapp.entity.Advice;

import java.util.Optional;

public interface AdviceService {

    String fetchAdvice();

    Advice getAdviceById(Long Id);

    Advice getByQuestionnaireId(Long questionnaireId);

    Advice saveAdvice(Advice advice, String recommendation);

    void deleteAdvice(Long id);

}
