document.addEventListener('DOMContentLoaded', function() {
    // Fetch Admin Alerts
    fetch('/admin/alerts')
        .then(response => response.json())
        .then(data => {
            const alertList = document.getElementById('alert-list');
            data.forEach(alert => {
                const li = document.createElement('li');
                li.textContent = `${alert.customer} - ${alert.alert} (${alert.overdue_days} days overdue)`;
                li.classList.add(`alert-${alert.alert}`);
                alertList.appendChild(li);
            });
        });

    // Fetch All Customers
    fetch('/admin/customers')
        .then(response => response.json())
        .then(data => {
            const customerList = document.getElementById('customer-list');
            data.forEach(customer => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${customer.Customer_Name}</td>
                    <td>${customer.due_date_current_debt}</td>
                    <td>${customer.current_debt_amount}</td>
                    <td>${customer.alert || 'none'}</td>
                `;
                if (customer.alert) {
                    tr.classList.add(`alert-${customer.alert}`);
                }
                customerList.appendChild(tr);
            });
        });
});
