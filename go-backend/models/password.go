package models

import (
	"go-backend/config"
	"time"

	"gorm.io/gorm"
)

type PasswordReset struct {
	ID        string    `gorm:"type:uuid;primaryKey;unique;not null"`
	UserID    string    `gorm:"index"`
	Email     string    `gorm:"uniqueIndex;not null"`
	Token     string    `gorm:"uniqueIndex;not null"`
	ExpiresAt time.Time `gorm:"not null"`
	CreatedAt time.Time
}

type PasswordResetRequest struct {
	Email string `json:"email" binding:"required,email"`
}

func (p *PasswordReset) CreatePasswordReset(db *gorm.DB, passReset *PasswordReset) error {
	err := config.CreateOneRecord(db, passReset)
	if err != nil {
		return err
	}

	return nil
}
