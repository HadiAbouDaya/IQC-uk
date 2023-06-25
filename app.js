document.getElementById('get-price').addEventListener('click', function() {
  var numEmployees = parseInt(document.getElementById('numEmployees').value);
  var riskLevel = document.getElementById('riskLevel').value;

  var FeesPerAMD = numEmployees <= 45 ? 750 : 1500;
  var LicenseFee = 2000;

  var auditDaysMap = {
    '1': [1.50, 2.00, 2.50, 3.00, 4.00, 5.00, 6.00, 7.00, 8.00, 9.00, 10.00, 11.00, 12.00, 13.00, 14.00, 15.00, 16.00, 17.00, 18.00, 19.00, 20.00, 21.00, 22.00],
    '2': [2.50, 3.00, 3.00, 3.50, 4.00, 4.50, 5.00, 5.50, 6.00, 7.00, 8.00, 9.00, 10.00, 11.00, 12.00, 12.00, 13.00, 14.00, 15.00, 16.00, 17.00, 19.00, 20.00],
    '3': [2.50, 3.00, 3.50, 4.50, 5.50, 6.00, 7.00, 8.00, 9.00, 10.00, 11.00, 12.00, 13.00, 15.00, 16.00, 17.00, 18.00, 19.00, 20.00, 21.00, 23.00, 25.00, 27.00],
    '4': [3.00, 3.50, 4.50, 5.50, 7.00, 8.00, 9.00, 11.00, 12.00, 13.00, 15.00, 16.00, 17.00, 19.00, 20.00, 21.00, 23.00, 25.00, 27.00, 28.00, 30.00, 32.00, 34.00]
  };

  var auditDays = auditDaysMap[riskLevel][numEmployees-1]; // Subtracting 1 because array indices start at 0
  var totalPrice = LicenseFee + FeesPerAMD * auditDays;

  document.getElementById('auditDays').innerText = auditDays;
  document.getElementById('totalPrice').innerText = totalPrice;
});

