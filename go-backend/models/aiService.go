package models

import (
	"gorm.io/datatypes"
	"time"
)

type AIServiceRequest struct {
	Age                 int     `json:"age"`
	Location            string  `json:"location"`
	InvestmentKnowledge string  `json:"investmentKnowledge"`
	InvestmentPurpose   string  `json:"investmentPurpose"`
	InvestmentHorizon   int     `json:"investmentHorizon"`
	RiskTolerance       string  `json:"riskTolerance"`
	Amount              float64 `json:"amount"`
	Currency            string  `json:"currency"`
}

type AIServiceResponse struct {
	Status  string      `json:"status"`
	Data    interface{} `json:"data,omitempty"`
	Message string      `json:"message,omitempty"`
	Error   string      `json:"error,omitempty"`
}

type AIPersistedResponse struct {
	ID        uint           `gorm:"primaryKey;autoIncrement"`
	Status    string         `json:"status"`
	Query     datatypes.JSON `gorm:"type:jsonb" json:"query"`
	Data      datatypes.JSON `gorm:"type:jsonb" json:"data,omitempty"`
	Message   string         `json:"message,omitempty"`
	Error     string         `json:"error,omitempty"`
	CreatedAt time.Time      `json:"createdAt"`
	UpdatedAt time.Time      `json:"updatedAt"`
}
