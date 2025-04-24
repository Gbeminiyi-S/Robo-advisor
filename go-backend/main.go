package main

import (
	"go-backend/config"
	"log"
)

func main() {
	config.LoadEnv()

	db := config.ConnectToDatabase()
	if db != nil {
		log.Println("Ready to go!")
	}
}
