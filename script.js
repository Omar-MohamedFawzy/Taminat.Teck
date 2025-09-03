
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
}

// Calculator logic
function calculatePension() {
  const salary = parseFloat(document.getElementById('salary').value) || 0;
  const years = parseInt(document.getElementById('years').value) || 0;
  const accrual = Math.min(years * 0.015, 0.8);
  const gross = Math.round(salary * accrual);
  const net = Math.round(gross * 0.98);
  document.getElementById('result').innerHTML = `
    <p>نسبة الاستحقاق: ${ (accrual*100).toFixed(1) }%</p>
    <p>المعاش قبل الخصم: ${gross} جنيه</p>
    <p>المعاش بعد الخصم: ${net} جنيه</p>
  `;
}
