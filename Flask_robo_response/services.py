import os
import google.generativeai as genai # importing dependencies for the AI service

value = os.getenv('GOOGLE_API_KEY')

genai.configure(api_key=value)

model = genai.GenerativeModel('gemini-pro')

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
        investment_skill_level, 
        investment_purpose, 
        investment_horizon,
        risk_tolerance,
        amount,
        currency
        ):
    prompt_template.format(age, 
                            location, 
                            investment_skill_level, 
                            investment_purpose, 
                            investment_horizon, 
                            risk_tolerance, 
                            amount, 
                            currency)
    
    return prompt_template


def prompt_response(prompt):

    response = model.generate_content(prompt)

    return response

def format_response(response):

    raw = response.text

    raw = raw.replace("\n", "")
    raw = raw.replace("    ", "")
    raw = raw.replace("  ", "")
    raw = raw.replace("```", "")
    raw = raw.replace("json", "")

    # print(raw) ############
    #provisional list format 
    prov_format = (raw.split('"recommendations": ')[1].split("]}")[0].split("[")[1]+",").split('},')

    prov_format = prov_format[:len(prov_format)-1]

    # print("\n") 

    # print(f"provisional format: {prov_format}") ############

    # print("\n")

    mlist = []
    # sublist = []
    for i in prov_format:
        item = i.replace("{", "").split(',"')
        # print(item)
        sublist = [a.split(": ")[1] for a in item]
        mlist.append(sublist)

    response_list = [] # initialze an empty to store key value of each product recommendation 
    keys = ["financial_product", "ticker", "provider", "brief_description", "expected_return", "composition"]
    
    # print(mlist)
    print("\n")
    for i in mlist:
        response = {key: value.replace('"', "") for key, value in zip(keys, i)}
        response_list.append(response)

    formatted_response = response_list

    return formatted_response 


