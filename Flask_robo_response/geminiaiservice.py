from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

from services import *

import os
import google.generativeai as genai  # importing dependencies for the AI service
value = os.getenv('GOOGLE_API_KEY')


genai.configure(api_key=value)

model = genai.GenerativeModel('gemini-pro')


app = Flask(__name__)

# capture and store the data received from post request
# Configure CORS globally for all routes
# Configure CORS globally to allow all headers (including 'Content-Type')
# CORS(app, supports_credentials=False, origins="*", allow_headers="*", methods="*")

# CORS(app, resources={r"/*": {"origins": "*"}})
# CORS configuration
cors = CORS(
    app,
    resources={r"/*": {"origins": "*"}},
    supports_credentials=True,
    allow_headers=["Content-Type"],
    expose_headers=["Content-Type"],
)

# Your routes and other configurations go here
# For example:


# Store data in memory for the example
data_store = {
    "age": "",
    "location": "",
    "investmentKnowledge": "",
    "investmentPurpose": "",
    "investmentHorizon": "",
    "riskTolerance": "",
    "amount": "",
    "currency": ""
}

response_store = {}

def get_currency_symbol(currency):
    match currency:
        case "Dollar":
            return "$"
        case "Naira":
            return "₦"
        case "Cedi":
            return "₵"
        case "Pound":
            return "£"
        case "Euro":
            return "€"


# function to calculate future value of expected return => FV = P( 1 + r)^t

# Arinze commented this out...
def calculate_return(response, data_store):
    
    from decimal import Decimal, getcontext
    # print(response.keys())
    try:
        composition = response['composition']
        composition = float(composition.split("%")[0])
    except KeyError:
        # print(response)
        return response

    expected_return = response['expectedReturn']
    try:
        expected_return = float(expected_return.split("%")[0])
    except ValueError:
        expected_return = float((expected_return.split("%")[0]).split("-")[0])

    horizon = data_store['investmentHorizon']
    # horizon = float(horizon)
    # horizon = Decimal(horizon)
    # p = (composition/100) * float(data_store['amount'])
    # fv = Decimal(p * (1 + (expected_return / 100))) ** horizon
    # fv = float(fv)
    
    # horizon = Decimal(horizon)
    p = (composition/100) * float(data_store['amount'])
    fv = p * (1 + (expected_return / 100)) ** float(horizon)
    # fv = float(fv)
    return [p, round(fv, 2)]

# def calculate_return(response, data_store):
    from decimal import Decimal, getcontext

    try:
        composition = response['composition']
        composition = float(composition.split("%")[0])
    except KeyError:
        return {'composition': 0, 'expectedReturn': 0}

    expected_return = response['expectedReturn']
    try:
        expected_return = float(expected_return.split("%")[0])
    except ValueError:
        expected_return = float((expected_return.split("%")[0]).split("-")[0])

    horizon = data_store['investmentHorizon']
    horizon = Decimal(horizon)
    p = (composition/100) * float(data_store['amount'])
    fv = Decimal(p * (1 + (expected_return / 100))) ** horizon
    fv = float(fv)
    
    return {'composition': composition, 'expectedReturn': expected_return, 'p': p, 'fv': round(fv, 2)}

def process_responses(prompt, response):
    while True:
        response = prompt_response(prompt)
        formatted_response=format_response(response)
        keys = [i.keys() for i in formatted_response[:1]]
        if len(keys[0]) == 6:
            valid_list = formatted_response
            break
    return valid_list


# capture and store the data received from post request
# Configure CORS globally for all routes
# Configure CORS globally to allow all headers (including 'Content-Type')
# CORS(app, supports_credentials=False, origins="*", allow_headers="*", methods="*")


# Arinze commented this out...
@app.route('/gemini_service', methods=['POST'])
# @app.route('/gemini_service', methods=['POST'])
def store_data():

    import os
    import google.generativeai as genai  # importing dependencies for the AI service

    value = os.getenv('GOOGLE_API_KEY')

    genai.configure(api_key=value)

    model = genai.GenerativeModel('gemini-pro')

    global prompt_build, ai_response, formatted_response

    print(request)

    data = request.get_json()
    
    # Arinze added this....
     # Ensure that all required keys are present in the data dictionary
    # required_keys = ['age', 'location', 'investmentKnowledge', 'investmentPurpose', 'investmentHorizon', 'riskTolerance', 'amount', 'currency']

    # try:
    #     for key in required_keys:
    #         data_store[key] = data[key]
    # except KeyError as e:
    #     return jsonify({'error': f'Missing required key: {e.args[0]}'}, 400)

    # Store the data
    data_store['age'] = data['age']
    data_store['location'] = data['location']
    data_store['investmentKnowledge'] = data['investmentKnowledge']
    data_store['investmentPurpose'] = data['investmentPurpose']
    data_store['investmentHorizon'] = data['investmentHorizon']
    data_store['riskTolerance'] = data['riskTolerance']
    data_store['amount'] = data['amount']
    data_store['currency'] = data['currency']

    # build prompt based on data fetched from the post request and persisted on data store
    prompt_build = get_prompt(
        data_store['age'],
        data_store['location'],
        data_store['investmentKnowledge'],
        data_store['investmentPurpose'],
        data_store['investmentHorizon'],
        data_store['riskTolerance'],
        data_store['amount'],
        data_store['currency']
    )

    # fetch response from ai service
    ai_response = prompt_response(prompt_build)

    # format ai response to required template
    formatted_response = format_response(ai_response)
    
    valid_response = process_responses(prompt_build, ai_response)
    print(valid_response)

    # print([res.keys() for res in formatted_response])
    # Calculate return values for each item in formatted_response
    print("\n", "\n", "\n")
    print([calculate_return(res, data_store) for res in valid_response])
    
    # principal_and_return_values = [
    # (calculated_return.get(0, 0), calculated_return.get(1, 0))
    # for calculated_return in [calculate_return(res, data_store) for res in formatted_response]
    # ]
    
    # Arinze commented this out....
    principal_and_return_values = [(calculate_return(res, data_store)[0],
                                    calculate_return(res, data_store)[1])
                                   for res in valid_response]

    # Add principal amount to each item in formatted_response
    prov_response = [{**rec, "principal": rv[0]}
                     for rec, rv in zip(valid_response, principal_and_return_values)]

    # Add estimated return value to each item in formatted_response
    final_response = [{**rec, "estimatedReturnValue": rv[1]}
                      for rec, rv in zip(prov_response, principal_and_return_values)]

    final_response = [
        {**rec, "currency": get_currency_symbol(data_store['currency'])} for rec in final_response]
    
    response_store['recommendations'] = final_response

    return jsonify({'status': 'success'}), 200


@app.route('/gemini_response', methods=['GET'])
def retrieve_data():
    
    return response_store['recommendations'], 200
    
    # return jsonify({'recommendations': response_store['recommendations']}), 200


if __name__ == '__main__':
    app.run(debug=True)
