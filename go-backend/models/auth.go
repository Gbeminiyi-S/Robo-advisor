package models

import (
	"go-backend/config"
	"time"

	"gorm.io/gorm"
)

type User struct {
	ID               uint    `gorm:"primaryKey"`
	Name             string  `gorm:"not null"`
	Email            string  `gorm:"uniqueIndex;not null"`
	Password         string  `gorm:"not null"`
	ResetToken       *string `gorm:"index"`
	ResetTokenExpiry *time.Time
	CreatedAt        time.Time
	UpdatedAt        time.Time
	DeletedAt        gorm.DeletedAt `gorm:"index"`
}

func (u *User) CreateUser(db *gorm.DB, user *User) error {
	err := config.CreateOneRecord(db, user)
	if err != nil {
		return err
	}

	return nil
}

func (u *User) GetUserByEmail(db *gorm.DB, email string) (*User, error) {
	var user User

	err := config.FindOneByField(db, user, "email", email)
	if err != nil {
		return nil, err
	}

	return &user, nil
}

func (u *User) GetUserByUsername(db *gorm.DB, name string) (*User, error) {
	var user User

	err := config.FindOneByField(db, user, "name", name)
	if err != nil {
		return nil, err
	}

	return &user, nil
}

func (u *User) GetUserByID(db *gorm.DB, id uint) (*User, error) {
	var user User

	err := config.FindByID(db, user, id)
	if err != nil {
		return nil, err
	}

	return &user, nil
}

func (u *User) UpdateUserPassword(db *gorm.DB, user *User) error {
	err := config.UpdateOneFieldByID(db, user, user.ID, "password", user.Password)
	if err != nil {
		return err
	}

	return nil
}
