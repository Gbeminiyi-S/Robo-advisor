package com.advisorApp.roboadvisorapp.service;

import com.advisorApp.roboadvisorapp.entity.Advice;

import java.util.Optional;

public interface AdviceService {

    Advice getAdviceById(Long Id);

    Advice saveAdvice(Advice advice);

    void deleteAdvice(Long id);

}
