import os
import google.generativeai as genai  # importing dependencies for the AI service
from flask import request, jsonify
from flask_cors import CORS, cross_origin
from flask_restx import Namespace, Resource, fields
from .utils import (
    format_response,
    get_currency_symbol,
    calculate_return,
    process_responses,
    validate_payload
)
from .services import get_prompt, prompt_response, get_available_models

value = os.getenv("GOOGLE_API_KEY")

genai.configure(api_key=value)

model = genai.GenerativeModel("gemini-1.5-flash")

gemini_bp = Namespace('api', description='Gemini-based AI Endpoints')
# gemini_bp = Blueprint("gemini_bp", __name__)

gemini_model = gemini_bp.model('GeminiRequest', {
    'age': fields.Integer(required=True, example=30),
    'location': fields.String(required=True, example='US'),
    'investmentKnowledge': fields.String(required=True, example='moderate'),
    'investmentPurpose': fields.String(required=True, example='retirement'),
    'investmentHorizon': fields.Integer(required=True, example=10),
    'riskTolerance': fields.String(required=True, example='medium'),
    'amount': fields.Float(required=True, example=50000),
    'currency': fields.String(required=True, example='USD'),
})


# Store data in memory for the example
# data_store = {
#     "age": "",
#     "location": "",
#     "investmentKnowledge": "",
#     "investmentPurpose": "",
#     "investmentHorizon": "",
#     "riskTolerance": "",
#     "amount": "",
#     "currency": "",
# }

data_store = {}
response_store = {}


# @gemini_bp.route("/api/gemini_request", methods=["POST"])
# def store_data():
@gemini_bp.route('/gemini_request')
class GeminiRequest(Resource):
    @gemini_bp.expect(gemini_model)
    def post(self):
        global prompt_build, ai_response, formatted_response

        data = request.get_json()
        
        is_valid, error_msg = validate_payload(data)
        if not is_valid:
            return {"status": "error", "message": error_msg}, 400

        # Store the data
        data_store["age"] = data["age"]
        data_store["location"] = data["location"]
        data_store["investmentKnowledge"] = data["investmentKnowledge"]
        data_store["investmentPurpose"] = data["investmentPurpose"]
        data_store["investmentHorizon"] = data["investmentHorizon"]
        data_store["riskTolerance"] = data["riskTolerance"]
        data_store["amount"] = data["amount"]
        data_store["currency"] = data["currency"]

        # build prompt based on data fetched from the post request and persisted on data store
        prompt_build = get_prompt(
            data_store["age"],
            data_store["location"],
            data_store["investmentKnowledge"],
            data_store["investmentPurpose"],
            data_store["investmentHorizon"],
            data_store["riskTolerance"],
            data_store["amount"],
            data_store["currency"],
        )

        # fetch response from ai service
        ai_response = prompt_response(prompt_build)
        if isinstance(ai_response, dict) and "error" in ai_response:
            return {
                "status": "error",
                "message": ai_response["error"]
            }, 500

        # format ai response to required template
        formatted_response = format_response(ai_response)

        valid_response = process_responses(prompt_build, ai_response)

        # print([res.keys() for res in formatted_response])
        # Calculate return values for each item in formatted_response
        print("\n", "\n", "\n")
        print([calculate_return(res, data_store) for res in valid_response])

        principal_and_return_values = [
            (calculate_return(res, data_store)[0], calculate_return(res, data_store)[1])
            for res in valid_response
        ]

        # Add principal amount to each item in formatted_response
        prov_response = [
            {**rec, "principal": rv[0]}
            for rec, rv in zip(valid_response, principal_and_return_values)
        ]

        # Add estimated return value to each item in formatted_response
        final_response = [
            {**rec, "estimatedReturnValue": rv[1]}
            for rec, rv in zip(prov_response, principal_and_return_values)
        ]

        final_response = [
            {**rec, "currency": get_currency_symbol(data_store["currency"])}
            for rec in final_response
        ]

        response_store["recommendations"] = final_response

        return (
            {"status": "success", "data": response_store["recommendations"]},
            200,
        )


# @gemini_bp.route("/api/gemini_response", methods=["GET"])
# def retrieve_data():
@gemini_bp.route('/gemini_response')
class GeminiResponse(Resource):
    def get(self):
        if "recommendations" in response_store:
            return {"status": "success", "data": response_store["recommendations"]}, 200
        else:
            return {"status": "error", "message": "No recommendations available yet."}, 404


# @gemini_bp.route('/api/gemini_models', methods=['GET'])
# def list_gemini_models():
@gemini_bp.route('/gemini_models')
class GeminiModels(Resource):
    def get(self):
        models = get_available_models()
        if isinstance(models, dict) and "error" in models:
            return {"status": "failed", "message": models["error"]}, 500
        return {"status": "success", "models": models}, 200
