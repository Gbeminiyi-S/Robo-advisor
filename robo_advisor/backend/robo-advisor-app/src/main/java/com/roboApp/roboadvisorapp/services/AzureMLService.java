package com.roboApp.roboadvisorapp.services;


import org.springframework.http.MediaType;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.web.client.RestTemplate;

@Service
public class AzureMLService {
    private static final String azureMLEndpoint = "AzureEndpoint";
    private static final String azureMLAPI = "AzureApikey";

    public String sendDataToAzureML(String customerData) {
        try {
            URI azurMLUri = new URI(AzureMLEndpoint);


            HttpHeaders azureHeaders = new HttpHeaders();
            azureHeaders.setContentType(MediaType.APPLICATION_JSON);
            azureHeaders.set("Authorization", "Bearer", +AzureMLApi);

            RequestEntity<String> azureRequestEntity = new RequestEntity<>(customerData, azureHeaders, HttpMethod.POST, azurMLUri);

            RestTemplate azureRestTemplate = new RestTemplate();

            ResponseEntity<String> azureResponseEntity = azureRestTemplate.exchange(azureRequestEntity, String.class);

            return azureResponseEntity.getBody();
          }
        catch (URISyntaxException e)
        {
            e.printStackTrace();
            return "Error in URI syntax";
        }
    }
}