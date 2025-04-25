package models

import (
	"go-backend/config"
	"time"

	"gorm.io/gorm"
)

type PasswordReset struct {
	ID        string    `gorm:"type:uuid;primaryKey;unique;not null"`
	UserID    string    `gorm:"index"`
	Token     string    `gorm:"uniqueIndex;not null"`
	ExpiresAt time.Time `gorm:"not null"`
	CreatedAt time.Time
}

func (p *PasswordReset) CreatePasswordReset(db *gorm.DB, passReset *PasswordReset) error {
	err := config.CreateOneRecord(db, passReset)
	if err != nil {
		return err
	}

	return nil
}
