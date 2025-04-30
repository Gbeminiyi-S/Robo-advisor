from flask_restx import Api
from app.routes import gemini_bp

api = Api(
    title='AI Service API',
    version='1.0',
    description='Gemini-based AI Advisor APIs',
    doc="/api/swagger",
    ui=True
)

api.add_namespace(gemini_bp, path='/api')
