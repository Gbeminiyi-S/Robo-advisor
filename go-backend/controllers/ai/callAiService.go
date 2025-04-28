package ai

import (
	"go-backend/models"
	"go-backend/services"
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type Controller struct {
	Db *gorm.DB
}

// @Summary      User login
// @Description  Authenticate user and return JWT token
// @Tags         Auth
// @Accept       json
// @Produce      json
// @Param        body  body      models.AIServiceRequest  true  "Interaction with the AI Service"
// @Success      200   {object}  models.AIResponse
// @Failure      400   {object}  models.ErrorResponse
// @Failure      401   {object}  models.ErrorResponse
// @Router       /auth/login [post]
func (base *Controller) GetAiResponse(c *gin.Context) {
	var input models.AIServiceRequest

	err := c.BindJSON(&input)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"status": "error", "error": err.Error()})
		return
	}

	resp, respErr := services.CallAIService(base.Db, input)
	if respErr != nil {
		c.JSON(http.StatusBadRequest, gin.H{"status": "error", "error": respErr.Error()})
		return
	}

	c.JSON(http.StatusOK, resp)
}
