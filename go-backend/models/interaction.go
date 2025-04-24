package models

import (
	"time"
	"gorm.io/datatypes"
)

type Interaction struct {
	ID         uint           `gorm:"primaryKey"`
	UserID     uint           // foreign key
	User       User           // association
	Query      datatypes.JSON `gorm:"type:jsonb"`
	Response   datatypes.JSON `gorm:"type:jsonb"`
	CreatedAt  time.Time
}
