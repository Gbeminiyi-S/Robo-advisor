package repository

type Config struct {
	PostgresHost     string
	PostgresPort     string
	PostgresUser     string
	PostgresPassword string
	PostgresDB       string
	PostgresTimezone string
	PostgresSslMode  string
	JwtSecret        string
	JwtExpiration    string
	AppHost          string
	FrontendHost     string
	Port             string
	EmailAddress     string
	EmailPassword    string
}
