package com.roboApp.roboadvisorapp.entity;

import lombok.Data;

import java.util.List;

@Data
public class GptResponse {

    private List<GptChoice> choices;



}
