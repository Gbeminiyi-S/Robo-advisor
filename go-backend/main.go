package main

import (
	"go-backend/config"
	"go-backend/models"
	"log"
)

func main() {
	_, err := config.LoadEnv()
	if err != nil {
		log.Fatalf("Failed to load env credentials: %v", err)
	}

	db := config.ConnectToDatabase()
	if db != nil {
		log.Println("Ready to go!")
	}

	dbErr := db.AutoMigrate(&models.User{}, &models.Interaction{})
	if dbErr != nil {
		log.Fatalf("Migration failed: %v", dbErr)
	}
}
