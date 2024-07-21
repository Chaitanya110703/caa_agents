from flask import Flask, render_template, jsonify, request
import joblib
import numpy as np
from flask_pymongo import PyMongo


model = joblib.load('model_3.joblib')
scaler = joblib.load('scaler.joblib')

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/CreditScoreDb"
mongodb_client = PyMongo(app)
db = mongodb_client.db


# @app.route('/predict', methods=['POST'])
def predict_credit_score():
    username = request.form.get('username')
    password = request.form.get('password')
    
   
    data = db.customers.findOne({'Customer_Name': username})
    
    if data:
        
        delinq_2yrs = data.get('delinq_2yrs', 0)
        pub_rec = data.get('pub_rec', 0)
        revol_bal = data.get('revol_bal', 0.0)
        revol_util = data.get('revol_util', 0.0)
        days_with_cr_line = data.get('days_with_cr_line', 0.0)
        inq_last_6mths = data.get('inq_last_6mths', 0.0)

        
        input_data  = (np.array([delinq_2yrs,pub_rec, revol_bal,  revol_util,  days_with_cr_line, inq_last_6mths]).reshape(1,6))
        input_data_normalized = scaler.transform(input_data)
        result = model.predict(input_data_normalized)

        return jsonify({'credit_score': result[0]})
    else:
        return jsonify({'error': f"No data found for username '{username}'"}), 404

if __name__ == '__main__':
     app.run(port=3000, debug=True)
