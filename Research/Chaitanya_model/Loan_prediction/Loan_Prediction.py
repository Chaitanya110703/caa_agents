from flask import Flask, render_template,request, jsonify
import joblib
import numpy as np
import sklearn
print(sklearn.__version__)

import pickle
import sklearn

# Load the model
with open('loan_prediction_1.joblib', 'rb') as f:
    model = joblib.load(f)

with open('loan_scaler.joblib', 'rb') as f:
    model = joblib.load(f)

# print(f"scikit-learn version used to save the model: {model.__module__}")
# print(f"Current scikit-learn version: {sklearn.__version__}")


# model = joblib.load('loan_prediction_1.joblib')
# scaler = joblib.load('loan_scaler_1.joblib')

app = Flask(__name__)



@app.route('/predict', methods=['POST'])
def Loan_prediction():
    no_of_dependents = int(request.form.get('no_of_dependents'))
    cibil_score = int(request.form.get('cibil_score'))
    loan_term = float(request.form.get('loan_term'))
    education_Graduate = float(request.form.get('education_Graduate'))
    self_employed_Yes = float(request.form.get('self_employed_Yes'))
    income = float(request.form.get('income'))
    loan_amt = float(request.form.get('loan_amt'))

    

    data_to_scale = np.array([income, loan_amt]).reshape(1, -1)

    # Normalize the income and loan_amt values
    scaled_data = scaler.transform(data_to_scale)
    income_normalized, loan_amt_normalized = scaled_data[0]

    # Prepare the final input data with normalized and other features
    input_data = np.array([no_of_dependents, cibil_score, loan_term, education_Graduate, self_employed_Yes, income_normalized, loan_amt_normalized]).reshape(1, -1)

    # Make the prediction using the final input data
    result = model.predict(input_data)

    return jsonify({'Loan_Prediction': result[0]})


if __name__ == '__main__':
    app.run(port=3000, debug=True)
