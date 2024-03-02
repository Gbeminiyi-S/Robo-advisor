package com.advisorApp.roboadvisorapp.service.Impl;

import com.advisorApp.roboadvisorapp.entity.Advice;
import com.advisorApp.roboadvisorapp.repository.AdviceRepository;
import com.advisorApp.roboadvisorapp.service.AdviceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AdviceServiceImpl implements AdviceService {

    @Autowired
    public AdviceRepository adviceRepository;


    @Override
    public Advice getAdviceById(Long id) {

       return adviceRepository.findById(id).get();
    }

    @Override
    public Advice getAdviceByQuestionnaireId(Long questionnaireId) {

        return adviceRepository.getAdviceByQuestionnaireId(questionnaireId);
    }

    @Override
    public Advice saveAdvice(Advice advice) {
        return adviceRepository.save(advice);
    }

    @Override
    public void deleteAdvice(Long id) {

        adviceRepository.deleteById(id);
    }

}
