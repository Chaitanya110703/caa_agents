from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
from pymongo import MongoClient
from datetime import datetime

app = Flask(__name__)
CORS(app)

# Connect to MongoDB
client = MongoClient('mongodb://localhost:27017/')
db = client['CreditScoreDb']
customers_collection = db['customers']
admins_collection = db['admins']

# Define alert thresholds
ALERT_THRESHOLDS = {
    'yellow': 90,
    'orange': 180,
    'red': 365
}

# Utility function to calculate days overdue
def calculate_overdue_days(due_date):
    today = datetime.now()
    if isinstance(due_date, str):
        due_date = datetime.strptime(due_date, "%Y-%m-%d")
    overdue_days = (today - due_date).days
    return overdue_days

# Admin Routes
@app.route('/admin')
def admin_dashboard():
    customers = list(customers_collection.find())
    alerts = []
    for customer in customers:
        overdue_days = calculate_overdue_days(customer.get('due_date_current_debt', datetime.now()))
        alert = None
        if overdue_days >= ALERT_THRESHOLDS['red']:
            alert = 'Account is NPA'
        elif overdue_days >= ALERT_THRESHOLDS['orange']:
            alert = 'Customer has debt to be paid.'
        elif overdue_days >= ALERT_THRESHOLDS['yellow']:
            alert = 'yellow'
        alerts.append({
            'customer': customer['Customer_Name'],
            'alert': alert,
            'overdue_days': overdue_days,
            'current_debt_amount': customer.get('current_debt_amount', 0)
        })
    return render_template('admin.html', customers=customers, alerts=alerts)

# Customer Routes
@app.route('/customer/<customer_name>')
def customer_dashboard(customer_name):
    customer = customers_collection.find_one({'Customer_Name': customer_name})
    if customer:
        overdue_days = calculate_overdue_days(customer.get('due_date_current_debt', datetime.now()))
        alert = None
        if overdue_days >= ALERT_THRESHOLDS['red']:
            alert = 'red'
        elif overdue_days >= ALERT_THRESHOLDS['orange']:
            alert = 'orange'
        elif overdue_days >= ALERT_THRESHOLDS['yellow']:
            alert = 'yellow'
        current_debt_amount = customer.get('current_debt_amount', 0)
        loan_details = customer.get('loan_details', [])
        return render_template('customer.html', customer_name=customer_name, alert=alert, overdue_days=overdue_days, current_debt_amount=current_debt_amount, loan_details=loan_details)
    else:
        return "Customer not found", 404

if __name__ == '__main__':
    app.run(debug=True)
