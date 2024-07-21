document.addEventListener('DOMContentLoaded', function() {
    // Fetch Customer Alerts
    fetch(`/customer/${customerName}/alerts`)
        .then(response => response.json())
        .then(data => {
            const customerAlert = document.getElementById('customer-alert');
            if (data.alert) {
                customerAlert.textContent = `Alert: ${data.alert} (${data.overdue_days} days overdue)`;
                customerAlert.classList.add(`alert-${data.alert}`);
            } else {
                customerAlert.textContent = 'No alerts';
            }
        });

    // Fetch Customer Debts
    fetch(`/customer/${customerName}/debts`)
        .then(response => response.json())
        .then(data => {
            const customerDebt = document.getElementById('customer-debt');
            customerDebt.innerHTML = `
                <p>Current Debt Amount: ${data.current_debt_amount}</p>
                <h3>Loan Details</h3>
                <ul>
                    ${data.loan_details.map(loan => `
                        <li>
                            Loan ID: ${loan.loan_id}, Amount: ${loan.loan_amount}, Status: ${loan.loan_status}
                        </li>
                    `).join('')}
                </ul>
            `;
        });
});
