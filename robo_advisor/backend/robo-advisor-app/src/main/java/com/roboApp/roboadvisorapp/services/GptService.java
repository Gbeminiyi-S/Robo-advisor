package com.roboApp.roboadvisorapp.services;

import com.google.gson.Gson;
import com.roboApp.roboadvisorapp.entity.GptRequest;
import com.roboApp.roboadvisorapp.entity.GptResponse;
import lombok.extern.slf4j.Slf4j;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
@Slf4j
public class GptService {

    @Value("${OPEN_AI_URL}")
    private String OPEN_AI_URL;

    @Value("${OPEN_AI_KEY}")
    private String OPEN_AI_KEY;

    public String processChatGPTSearch(String query){

        GptRequest gptRequest = new GptRequest();

        gptRequest.setPrompt(query);

        String url = OPEN_AI_URL;
        HttpPost post = new HttpPost(url);
        post.addHeader("Content-Type", "application/json");
        post.addHeader("Authorization", "Bearer " + OPEN_AI_KEY);


        Gson gson = new Gson();

        String body = gson.toJson(gptRequest);

        log.info("body: " + body);

        try {
            final StringEntity entity = new StringEntity(body);
            post.setEntity(entity);

            try (CloseableHttpClient httpClient = HttpClients.custom().build();
                 CloseableHttpResponse response = httpClient.execute(post)) {

                String responseBody = EntityUtils.toString(response.getEntity());

                log.info("responseBody: " + responseBody);

                GptResponse gptResponse = gson.fromJson(responseBody, GptResponse.class);
                return gptResponse.getChoices().get(0).getText();

            } catch (Exception e) {
                return "failed";
            }
        }

        catch( Exception e) {
            return "failed";
        }
    }
}
