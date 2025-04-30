from flask import Flask
from flask_cors import CORS
from swagger.ai_docs import api as ai_docs


def create_app():
    app = Flask(__name__)
    cors_origins = [
        "http://localhost:3000",     
        "http://127.0.0.1:3000",    
        "http://localhost:8080",     
        "https://yourfrontenddomain.com",
        "https://yourgobackenddomain.com"    
    ]

    CORS(
        app,
        resources={r"/api/*": {"origins": cors_origins}},
        supports_credentials=True,
        allow_headers=["Content-Type"],
        expose_headers=["Content-Type"],
    )

    # from .routes import gemini_bp
    # app.register_blueprint(gemini_bp)
    
    ai_docs.init_app(app)
    return app
