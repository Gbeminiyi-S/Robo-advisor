FROM golang:1.23-alpine

# Install git and curl for go mod and health checks
RUN apk add --no-cache git curl

WORKDIR /app

COPY go.mod ./

COPY go.sum ./

RUN go mod download

COPY . .

RUN go build -o main .

EXPOSE 8080

CMD ["./main"]