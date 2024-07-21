from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)


model = joblib.load('Research\Loan_Prediction\loan_prediction_2.joblib')
scaler = joblib.load('Research\Loan_Prediction\loan_scaler_2.joblib')

@app.route('/predict', methods=['POST'])
def predict():
   
    data = request.get_json()

    
    features = np.array([
        data['no_of_dependents'],
        data['cibil_score'],
        data['loan_term'],
        data['education_Graduate'],
        data['self_employed_Yes'],
        data['income_annum'],
        data['loan_amount']
    ]).reshape(1, -1)

   
    X_not_scale = features[:, [0, 1, 2, 3, 4]]
    X_scaled = features[:, [5, 6]]

    scaled_features = scaler.transform(X_scaled)
    

    features = np.hstack([X_not_scale, scaled_features])

    prediction = model.predict(features)

    return jsonify({'prediction': int(prediction[0])})

if __name__ == '__main__':
    app.run(debug=True)
