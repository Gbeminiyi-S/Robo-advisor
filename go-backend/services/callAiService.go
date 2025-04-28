package services

import (
	"go-backend/config"
	"go-backend/models"
	"go-backend/utils"

	"encoding/json"
	"fmt"
	"log"
	"time"

	"gorm.io/gorm"
)

func CallAIService(db *gorm.DB, req models.AIServiceRequest) (*models.AIServiceResponse, error) {
	httpClient := utils.NewHTTPClient(10 * time.Second)
	aiServiceURL := "http://ai-service:5000/api/gemini_request"

	resp, body, err := httpClient.PostRequest(aiServiceURL, req)
	if err != nil {
		return nil, fmt.Errorf("failed to call ai-service: %v", err)
	}

	log.Printf("Response Status Code: %v", resp.StatusCode)
	log.Printf("Response Headers: %v", resp.Header)

	var parsedResponse models.AIServiceResponse
	if err := json.Unmarshal(body, &parsedResponse); err != nil {
		return nil, fmt.Errorf("failed to parse JSON response: %v", err)
	}

	if parsedResponse.Status == "success" {
		aiServiceResponse := models.AIPersistedResponse{
			Data:      parsedResponse.Data,
			Status:    parsedResponse.Status,
			CreatedAt: time.Now().Format(time.RFC3339),
			UpdatedAt: time.Now().Format(time.RFC3339),
		}
		
		err := config.CreateOneRecord(db, aiServiceResponse)
		if err != nil {
			return nil, err
		}
	}

	return &parsedResponse, nil
}
