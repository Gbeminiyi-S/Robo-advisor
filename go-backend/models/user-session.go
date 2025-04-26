package models

import (
	"go-backend/config"
	"time"

	"gorm.io/gorm"
)

type UserSession struct {
	ID        string    `gorm:"type:uuid;primaryKey;unique;not null"`
	UserID    string    `gorm:"index;unique;not null"`
	Token     string    `gorm:"uniqueIndex;not null"`
	ExpiresAt time.Time `gorm:"not null"`
	CreatedAt time.Time
}

func (u *UserSession) CreateUserSession(db *gorm.DB, session *UserSession) error {
	err := config.CreateOneRecord(db, session)
	if err != nil {
		return err
	}

	return nil
}

func (u *UserSession) GetUserSessionByID(db *gorm.DB, userID string) (*UserSession, error) {
	var userSession UserSession

	err := config.FindOneByField(db, userSession, "user_id", userID)
	if err != nil {
		return nil, err
	}

	return &userSession, nil
}

func (u *UserSession) GetUserSession(db *gorm.DB, userID string, token string) (*UserSession, error) {
	var userSession UserSession

	err := config.FindByFields(db, userSession, "token", token, "user_id", userID)
	if err != nil {
		return nil, err
	}

	return &userSession, nil
}

func (u *UserSession) DeleteUserSession(db *gorm.DB, userID string) error {
	var userSession UserSession

	err := config.DeleteSpecificRecord(db, userSession, "user_id = ?", userID)
	if err != nil {
		return err
	}

	return nil
}
