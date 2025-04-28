package models

type SignupResponse struct {
	Status  string `json:"status" example:"success"`
	Message string `json:"message" example:"User created successfully"`
}

// Standard error response
type ErrorResponse struct {
	Status string `json:"status" example:"error"`
	Error  string `json:"error" example:"Something went wrong"`
}

type LoginResponse struct {
	Status string `json:"status" example:"success"`
	Token  string `json:"token" example:"jwt.token.here"`
}

type LogoutResponse struct {
	Status  string `json:"status" example:"success"`
	Message string `json:"message" example:"Action successful"`
}

type PasswordResetResponse struct {
	Status  string `json:"status" example:"success"`
	Message string `json:"message" example:"Password reset successful"`
}

type PasswordChangeResponse struct {
	Status  string `json:"status" example:"success"`
	Message string `json:"message" example:"Password changed successfully"`
}

type AIResponse struct {
	Status string      `json:"status" example:"success"`
	Data   interface{} `json:"data,omitempty" example: "data": {
    "investmentAdvice": "Based on your risk tolerance, we recommend a diversified portfolio of stocks and bonds."
  }`
}
