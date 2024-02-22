package com.roboApp.roboadvisorapp.controller;

import com.roboApp.roboadvisorapp.entity.AdviceRequest;
import com.roboApp.roboadvisorapp.entity.RoboRecommendation;
import com.roboApp.roboadvisorapp.entity.SearchRequest;
import com.roboApp.roboadvisorapp.services.GptService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import lombok.Data;

@RestController
@Slf4j
@RequestMapping("/api")
public class RoboRestController {

    private GptService gptService;

    public RoboRestController(GptService gptService) {
        this.gptService = gptService;
    }

    @PostMapping("/searchChatGPT")
    public String searchChatGPT(@RequestBody SearchRequest searchRequest) {

        log.info("searchChatGPT Started query: " + searchRequest.getQuery());

        return gptService.processChatGPTSearch(searchRequest.getQuery());

    }
}
