package middleware

import (
	"errors"
	"fmt"
	"go-backend/config"
	"go-backend/models"
	"strconv"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

func CreateToken(userID uint, email string) (string, error) {
	expirationMinutes, err := strconv.Atoi(config.AppConfig.JwtExpiration)
	if err != nil {
		return "", fmt.Errorf("invalid JWT expiration value: %v", err)
	}

	expirationDuration := time.Duration(expirationMinutes) * time.Minute

	claims := models.JWTClaims{
		UserID: userID,
		Email:  email,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(time.Now().Add(expirationDuration)),
			IssuedAt:  jwt.NewNumericDate(time.Now()),
			Issuer:    "roboadvisor-auth",
		},
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	secret := config.AppConfig.JwtSecret

	return token.SignedString([]byte(secret))
}

func VerifyToken(tokenStr string) (*models.JWTClaims, error) {
	token, err := jwt.ParseWithClaims(tokenStr, &models.JWTClaims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte(config.AppConfig.JwtSecret), nil
	})

	if err != nil || !token.Valid {
		return nil, errors.New("invalid or expired token")
	}

	claims, ok := token.Claims.(*models.JWTClaims)
	if !ok {
		return nil, errors.New("could not parse claims")
	}

	return claims, nil
}

func IsTokenValid(tokenStr string) bool {
	_, err := VerifyToken(tokenStr)
	return err == nil
}

func GetUserClaims(tokenStr string) (*models.JWTClaims, error) {
	return VerifyToken(tokenStr)
}
