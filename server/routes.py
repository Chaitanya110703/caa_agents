from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

app.config["MONGO_URI"] = "mongodb://localhost:27017/credit_db"
mongodb_client = PyMongo(app)
db = mongodb_client.db

# Import your other routes or functions
from credit_bot_flask import chat
from credit_simulator import simulate
from Credit_Score import predict_credit_score
from Loan_Prediction import predict
from alert import customer_dashboard,admin_dashboard

@app.route('/chat', methods=['POST'])
def chat_route():
    return chat()

@app.route('/simulate', methods=['POST'])
def simulate_route():
    return simulate()

@app.route('/predict', methods=['POST'])
def predict_route():
    return predict_credit_score()

@app.route('/loanPredict', methods=['POST'])
def loanPredict_route():
    return predict()

@app.route('/customer', methods=['POST'])
def customer_details():
    return customer_dashboard()

@app.route('/admin', methods=['POST'])
def admin_panel():
    return admin_dashboard()

if __name__ == "__main__":
    app.run(debug=True, port=9000)
