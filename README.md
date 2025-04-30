# Robo-Advisor AI & Backend Services

## Overview

The robo-advisor provides personalized investment recommendations and portfolio management services to bank customers. Utilizing artificial intelligence and machine learning algorithms to analyze customer's risk tolerance, investment goals, and financial preferences. The robo-advisor then generates customized investment portfolios tailored to each customer's unique needs, optimizing returns while minimizing risk.

This project consists of two main services:

- **AI Service (Flask)**: A Gemini-powered AI advisor that provides investment recommendations based on user input.
- **Backend Service (Go)**: A supporting backend that manages file uploads, metadata, and presigned file access.

## 🐳 Docker Setup

We use Docker Compose to run both services together.

### 🧱 Services

1. **AI Service (Python + Flask)**
2. **Backend Service (Go + Gin)**

## 🚀 Running Locally with Docker

Make sure Docker is installed on your machine. Then run:

```
docker-compose up --build
```

This will start:

1. Flask AI service on [http://localhost:5000](http://localhost:5000)
2. Swagger UI on [http://localhost:5000/api/swagger](http://localhost:5000/api/swagger)
3. Go backend service on [http://localhost:8080](http://localhost:8080)

### AI API (Flask)
```
Swagger UI: /api/swagger
```

```
GET /api/gemini_response: Get recommendations
```

```
GET /api/gemini_models: List Gemini model options
```

```
POST /api/gemini_request: Submit user investment data
```

```
Sample JSON payload:
{
"age": 30,
"location": "US",
"investmentKnowledge": "moderate",
"investmentPurpose": "retirement",
"investmentHorizon": 10,
"riskTolerance": "medium",
"amount": 50000,
"currency": "USD"
}
```

To run the AI-service on your local environment via terminal;

1. Set up environment

```
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

2. Create .env file

```
GOOGLE_API_KEY=your_actual_key_here
```

3. Run Flask app

```
python main.py
```
