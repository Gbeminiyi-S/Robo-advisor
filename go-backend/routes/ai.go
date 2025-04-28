package routes

import (
	"github.com/gin-gonic/gin"

	"go-backend/controllers/ai"
)

func SetupAIRoutes(router *gin.RouterGroup, controller ai.Controller) {
	router.POST("/send-request", controller.GetAiResponse)
}
