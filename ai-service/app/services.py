import os
import google.generativeai as genai  # importing dependencies for the AI service
from google.api_core.exceptions import GoogleAPICallError, NotFound
from google.generativeai import list_models

value = os.getenv("GOOGLE_API_KEY")

genai.configure(api_key=value)

model = genai.GenerativeModel("gemini-1.5-flash")

prompt_template = """
I am {} years old and I live in {}. I consider myself a {} in terms of investment and I wish to invest
for the purpose of {} over a {}-year horizon, and have a {} risk tolerance.
I have a sum of {} in {} to invest. Which specific financial products ( including ticker and provider
would a typical financial advisor recommend for investment given my circumstances? You may limit the number of recommendations to a minimum of five.
You may also add an estimate of the expected return from each recommendation.
Environmental factors are not important to me when I am investing. Which composition
(as a percentage) would he recommend for each financial product?
Each recommendation should be a proportion of '100%' of the amount to be invested. I will not consider your response personalized advice.
You may send the response in json format, let the key to the recommendations be given as recommendations,
and each key in the recommendation should be represented as ("financial_product", "ticker", "provider", "brief_description", "expected_return", "composition") and also ensure that composition comes last in the json.
"""


def get_prompt(
    age,
    location,
    investmentKnowledge,
    investmentPurpose,
    investmentHorizon,
    riskTolerance,
    amount,
    currency,
):
    return prompt_template.format(
        age,
        location,
        investmentKnowledge,
        investmentPurpose,
        investmentHorizon,
        riskTolerance,
        amount,
        currency,
    )

    # prompt_template.format(age,
    #                        location,
    #                        investmentKnowledge,
    #                        investmentPurpose,
    #                        investmentHorizon,
    #                        riskTolerance,
    #                        amount,
    #                        currency)

    # return prompt_template


def prompt_response(prompt):
    # response = model.generate_content(prompt)
    # return response
    try:
        response = model.generate_content(prompt)
        return response
    except NotFound as e:
        print(f"Model not found: {e}")
        return {
            "error": "AI model not found. Please check the model name or availability."
        }
    except GoogleAPICallError as e:
        print(f"Google API error: {e}")
        return {
            "error": "There was an issue communicating with the AI service. Please try again later."
        }
    except Exception as e:
        print(f"Unexpected error: {e}")
        return {"error": "An unexpected error occurred while generating the response."}


def get_available_models():
    try:
        models = list_models()
        return [{"name": model.name, "supported_methods": model.supported_generation_methods} for model in models]
    except Exception as e:
        print(f"Error listing models: {e}")
        return {"error": "Failed to fetch available models."}
