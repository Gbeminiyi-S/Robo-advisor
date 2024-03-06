from flask import Flask, request, jsonify

from services import *

import os
import google.generativeai as genai # importing dependencies for the AI service



app = Flask(__name__)

value = os.getenv('GOOGLE_API_KEY')

genai.configure(api_key=value)

model = genai.GenerativeModel('gemini-pro')

# Store data in memory for the example
data_store = {
    "age": "", 
    "location": "", 
    "investment_skill_level": "", 
    "investment_purpose": "", 
    "investment_horizon": "",
    "risk_tolerance": "",
    "amount": "",
    "currency": ""
}



# fucntion to calculate future value of expected return => FV = P( 1 + r)^t
def calculate_return(response, data_store):
    print(response.keys())
    try:
        composition = response['composition']
        composition = float(composition.split("%")[0])
    except KeyError:
        print(response)
        return response

    expected_return = response['expected_return']
    try:
        expected_return = float(expected_return.split("%")[0])
    except ValueError:
        expected_return = float((expected_return.split("%")[0]).split("-")[0])
    
    horizon = data_store['investment_horizon']
    horizon = float(horizon)       
    p = (composition/100) * data_store['amount']
    fv = p * (1 + (expected_return / 100) ) ** horizon
    return round(fv, 2)

# capture and store the data received from post request
@app.route('/gemini_service', methods=['POST'])
def store_data():
    
    import os
    import google.generativeai as genai # importing dependencies for the AI service

    
    value = os.getenv('GOOGLE_API_KEY')

    genai.configure(api_key=value)

    model = genai.GenerativeModel('gemini-pro')



    global prompt_build, ai_response, formatted_response

    data = request.get_json()
    # Store the data
    data_store['age'] = data['age']
    data_store['location'] = data['location']
    data_store['investment_skill_level'] = data['investment_skill_level']
    data_store['investment_purpose'] = data['investment_purpose']
    data_store['investment_horizon'] = data['investment_horizon']
    data_store['risk_tolerance'] = data['risk_tolerance']
    data_store['amount'] = data['amount']
    data_store['currency'] = data['currency']

    

    # build prompt based on data fetched from the post request and persisted on data store
    prompt_build = get_prompt(
            data_store['age'],
            data_store['location'],
            data_store['investment_skill_level'],
            data_store['investment_purpose'],
            data_store['investment_horizon'],
            data_store['risk_tolerance'],
            data_store['amount'],
            data_store['currency']
        )
    
    ## fetch response from ai service 
    ai_response = prompt_response(prompt_build)


    ## format ai response to required template 
    formatted_response = format_response(ai_response)

    print([res.keys() for res in formatted_response])
    # Calculate return values for each item in formatted_response
    return_values = [calculate_return(res, data_store) for res in formatted_response]

    # Add estimated return value to each item in formatted_response
    final_response = [{**rec, "estimated_return_value": rv} for rec, rv in zip(formatted_response, return_values)]

    return jsonify({'recommendations': final_response}), 200






if __name__ == '__main__':
    app.run(debug=True)
