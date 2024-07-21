document.getElementById('loanForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const creditScore = document.getElementById('creditScore').value;

    fetch('http://localhost:5000/get-loan-rates', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ credit_score: creditScore })
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            showError(data.error);
        } else {
            showRates(data);
        }
    })
    .catch(error => showError('An error occurred'));
});

function showRates(rates) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>Loan Rates</h3>
        <p>Home Loan: ${rates.home_loan}%</p>
        <p>Personal Loan: ${rates.personal_loan}%</p>
    `;
    resultDiv.style.display = 'block';
}

function showError(message) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p style="color: red;">${message}</p>`;
    resultDiv.style.display = 'block';
}
