package auth

import (
	"fmt"
	"go-backend/models"

	"gorm.io/gorm"
)

func Logout(db *gorm.DB, email, token string) error {
	var user *models.User
	var session *models.UserSession

	_, err := user.GetUserByEmail(db, email)
	if err != nil {
		return fmt.Errorf("User not found: %v", err)
	}

	logoutErr := session.DeleteUserSession(db, token)
	if logoutErr != nil {
		return logoutErr
	}

	return nil
}
