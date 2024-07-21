from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
from pymongo import MongoClient
from datetime import datetime
import numpy as np
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

# Define NPA criteria
NPA_CRITERIA = {
    'dti_threshold': 20,  # Debt-to-Income ratio threshold
    'fico_threshold': 600,  # Minimum acceptable FICO score
    'pub_rec_threshold': 1  # Public records threshold
}

# Utility function to calculate days overdue
def calculate_overdue_days(due_date):
    today = datetime.now()
    if isinstance(due_date, str):
        due_date = datetime.strptime(due_date, "%Y-%m-%d")
    overdue_days = (today - due_date).days
    return overdue_days

# Utility function to determine if account is NPA
def is_npa(overdue_days, dti, fico, pub_rec, loan_statuses):
    if overdue_days >= ALERT_THRESHOLDS['red']:
        return True
    if dti > NPA_CRITERIA['dti_threshold']:
        return True
    if fico < NPA_CRITERIA['fico_threshold']:
        return True
    if pub_rec >= NPA_CRITERIA['pub_rec_threshold']:
        return True
    if any(status == 'default' for status in loan_statuses):
        return True
    return False

# Admin Route
@app.route('/admin')
def admin_dashboard():
    try:
        customers = list(customers_collection.find())
        if not customers:
            print("No customers found in the database.")
        alerts = []
        for customer in customers:
            print(f"Processing customer: {customer['Customer_Name']}")  # Debugging
            max_overdue_days = 0
            dti = customer.get('dti', 0)
            fico = customer.get('fico', 0)
            pub_rec = customer.get('pub_rec', 0)
            loan_statuses = []

            for loan in customer.get('loan_details', []):
                due_date = loan.get('due_date', None)
                if due_date:
                    overdue_days = calculate_overdue_days(due_date)
                    max_overdue_days = max(max_overdue_days, overdue_days)
                loan_statuses.append(loan.get('loan_status', 'unknown'))

            alert = None
            if is_npa(max_overdue_days, dti, fico, pub_rec, loan_statuses):
                alert = 'Account is NPA'
            elif max_overdue_days >= ALERT_THRESHOLDS['orange']:
                alert = 'Customer has debt to be paid.'
            elif max_overdue_days >= ALERT_THRESHOLDS['yellow']:
                alert = 'yellow'
            
            alerts.append({
                'customer': customer['Customer_Name'],
                'alert': alert,
                'overdue_days': max_overdue_days,
                'current_debt_amount': sum(loan.get('loan_amount', 0) for loan in customer.get('loan_details', []))
            })

        print("Alerts:", alerts)  # Debugging
        return render_template('admin.html', alerts=alerts)
    except Exception as e:
        print(f"Error in admin_dashboard: {e}")
        return jsonify({"error": str(e)}), 500

# Customer Route
@app.route('/customer')
def customer_dashboard(customer_name):
    try:
        
        customer = customers_collection.find_one({'Customer_Name': customer_name})
        if not customer:
            print(f"Customer not found: {customer_name}")
            return "Customer not found", 404

        print(f"Processing customer: {customer_name}")  # Debugging
        max_overdue_days = 0
        dti = customer.get('dti', 0)
        fico = customer.get('fico', 0)
        pub_rec = customer.get('pub_rec', 0)
        loan_statuses = []

        for loan in customer.get('loan_details', []):
            due_date = loan.get('due_date', None)
            if due_date:
                overdue_days = calculate_overdue_days(due_date)
                max_overdue_days = max(max_overdue_days, overdue_days)
            loan_statuses.append(loan.get('loan_status', 'unknown'))

        alert = None
        if is_npa(max_overdue_days, dti, fico, pub_rec, loan_statuses):
            alert = 'red'
        elif max_overdue_days >= ALERT_THRESHOLDS['orange']:
            alert = 'orange'
        elif max_overdue_days >= ALERT_THRESHOLDS['yellow']:
            alert = 'yellow'
        
        current_debt_amount = sum(loan.get('loan_amount', 0) for loan in customer.get('loan_details', []))
        loan_details = customer.get('loan_details', [])

        log_annual_income = customer.get('annual_income',0)
        annual_income = np.exp(log_annual_income)

        cust_json = {"customer_name": customer_name, "alert":alert, "overdue_days":max_overdue_days, "current_debt_amount": current_debt_amount, "loan_details": loan_details, "annual_income": annual_income, "on_or_missed": customer.get('on_time_payments_or_missed',0),"installment":customer.get('installment',0), "current_debt": customer.get('current_debt_amount', 0),"int_rate":customer.get('int_rate',0) }
        return cust_json
    except Exception as e:
        print(f"Error in customer_dashboard: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port = 9000)


    


