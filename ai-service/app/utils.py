from flask import request, jsonify
from .services import prompt_response


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


def process_responses(prompt, response):
    while True:
        response = prompt_response(prompt)
        formatted_response = format_response(response)
        keys = [i.keys() for i in formatted_response[:1]]
        if len(keys[0]) == 6:
            valid_list = formatted_response
            break
    return valid_list


# function to calculate future value of expected return => FV = P( 1 + r)^t
def calculate_return(response, data_store):

    from decimal import Decimal, getcontext

    try:
        composition = response["composition"]
        composition = float(composition.split("%")[0])
    except KeyError:
        return response

    expected_return = response["expectedReturn"]
    try:
        expected_return = float(expected_return.split("%")[0])
    except ValueError:
        expected_return = float((expected_return.split("%")[0]).split("-")[0])

    horizon = data_store["investmentHorizon"]
    p = (composition / 100) * float(data_store["amount"])
    fv = p * (1 + (expected_return / 100)) ** float(horizon)
    return [p, round(fv, 2)]


# function to format response
def format_response(response):

    raw = response.text

    raw = raw.replace("\n", "")
    raw = raw.replace("    ", "")
    raw = raw.replace("  ", "")
    raw = raw.replace("```", "")
    raw = raw.replace("json", "")

    # provisional list format
    prov_format = (
        raw.split('"recommendations": ')[1].split("]}")[0].split("[")[1] + ","
    ).split("},")

    prov_format = prov_format[: len(prov_format) - 1]

    mlist = []
    for i in prov_format:
        item = i.replace("{", "").split(',"')
        sublist = [a.split(": ")[1] for a in item]
        mlist.append(sublist)

    response_list = (
        []
    )  # initialze an empty to store key value of each product recommendation
    keys = [
        "financial_product",
        "ticker",
        "provider",
        "brief_description",
        "expectedReturn",
        "composition",
    ]

    for i in mlist:
        response = {key: value.replace('"', "") for key, value in zip(keys, i)}
        response_list.append(response)

    formatted_response = response_list

    return formatted_response


def validate_payload(data):
    required_fields = {
        "age": int,
        "location": str,
        "investmentKnowledge": str,
        "investmentPurpose": str,
        "investmentHorizon": int,
        "riskTolerance": str,
        "amount": (int, float),
        "currency": str
    }

    for field, expected_type in required_fields.items():
        if field not in data:
            return False, f"Missing required field: {field}"
        if not isinstance(data[field], expected_type):
            return False, f"Incorrect type for {field}. Expected {expected_type.__name__}."
    
    return True, None
