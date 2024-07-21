from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)

# Load the model and scaler
model = joblib.load('loan_prediction_2.joblib')
scaler = joblib.load('loan_scaler_2.joblib')
print("Model Loaded")
#@app.route('/predict', methods=['POST'])
def predict():
    # Get the data from the POST request
    data = request.get_json()
    print("data")
    # Extract features
    features = np.array([
        data['dependants'],
        data['cibilScore'],
        data['loanTerm'],
        data['education'],
        data['selfEmployed'],
        data['income'],
        data['loanAmount']
    ]).reshape(1, -1)

    X_not_scale = features[:, [0, 1, 2, 3, 4]]
    X_scaled = features[:, [5, 6]]

    scaled_features = scaler.transform(X_scaled)

    features = np.hstack([X_not_scale, scaled_features])

    prediction = model.predict(features)

    return jsonify({'prediction': int(prediction[0])})

#if __name__ == '__main__':
#   app.run(debug=True, port=9000)
