from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

# Interest rates data
interest_rates = [
    {"range": (800, 900), "home_loan": 6.65, "personal_loan": 11.49},
    {"range": (750, 799), "home_loan": 6.75, "personal_loan": 11.99},
    {"range": (700, 749), "home_loan": 6.85, "personal_loan": 12.49},
    {"range": (650, 699), "home_loan": 6.95, "personal_loan": 13.49},
    {"range": (550, 649), "home_loan": 7.15, "personal_loan": 14.49},
]

def get_interest_rates(credit_score):
    for rate in interest_rates:
        if rate["range"][0] <= credit_score <= rate["range"][1]:
            return rate
    return None

@app.route('/get-loan-rates', methods=['POST'])
def get_loan_rates():
    data = request.get_json()
    credit_score = data.get('credit_score')

    if not credit_score:
        return jsonify({"error": "Credit score is required"}), 400

    credit_score = int(credit_score)
    rates = get_interest_rates(credit_score)

    if not rates:
        return jsonify({"error": "Invalid credit score"}), 400

    return jsonify(rates)

if __name__ == '__main__':
    app.run(debug=True)
