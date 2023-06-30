// Declare FeesPerAMD and LicenseFee as global variables
var FeesPerAMD;
var LicenseFee;

document.getElementById('get-price').addEventListener('click', function() {
  var numEmployees = parseInt(document.getElementById('numEmployees').value);
  var riskLevel = document.getElementById('riskLevel').value;
  var stageOption = document.getElementById('stages').value;

    // Initialize FeesPerAMD and LicenseFee with values from local storage, or set default values
    FeesPerAMD = parseInt(localStorage.getItem('FeesPerAMD')) || (numEmployees <= 45 ? 750 : 1500);
    LicenseFee = parseInt(localStorage.getItem('LicenseFee')) || 2000;


  var auditDaysMap = {
    '1': [1.50, 2.00, 2.50, 3.00, 4.00, 5.00, 6.00, 7.00, 8.00, 9.00, 10.00, 11.00, 12.00, 13.00, 14.00, 15.00, 16.00, 17.00, 18.00, 19.00, 20.00, 21.00, 22.00],
    '2': [2.50, 3.00, 3.00, 3.50, 4.00, 4.50, 5.00, 5.50, 6.00, 7.00, 8.00, 9.00, 10.00, 11.00, 12.00, 12.00, 13.00, 14.00, 15.00, 16.00, 17.00, 19.00, 20.00],
    '3': [2.50, 3.00, 3.50, 4.50, 5.50, 6.00, 7.00, 8.00, 9.00, 10.00, 11.00, 12.00, 13.00, 15.00, 16.00, 17.00, 18.00, 19.00, 20.00, 21.00, 23.00, 25.00, 27.00],
    '4': [3.00, 3.50, 4.50, 5.50, 7.00, 8.00, 9.00, 11.00, 12.00, 13.00, 15.00, 16.00, 17.00, 19.00, 20.00, 21.00, 23.00, 25.00, 27.00, 28.00, 30.00, 32.00, 34.00]
  };

  var auditDays = auditDaysMap[riskLevel][numEmployees-1]; // Subtracting 1 because array indices start at 0

// Save the original auditDays value to local storage before modifying it for stageOption 2
localStorage.setItem('originalAuditDays', auditDays);

  if (stageOption === '2') {
      auditDays = auditDays * 0.8; 
    }

  var totalPrice = LicenseFee + FeesPerAMD * auditDays;

  // document.getElementById('auditDays').innerText = auditDays;
  // document.getElementById('totalPrice').innerText = totalPrice;
  // Instead of redirecting with URL parameters, save the values to localStorage
  localStorage.setItem('auditDays', auditDays);
  localStorage.setItem('totalPrice', totalPrice);

    var employeeRange = document.getElementById('numEmployees').selectedOptions[0].text;
    var riskLevelText = document.getElementById('riskLevel').selectedOptions[0].text;
    var stageText = document.getElementById('stages').selectedOptions[0].text;

    localStorage.setItem('employeeRange', employeeRange);
    localStorage.setItem('riskLevel', riskLevelText);
    localStorage.setItem('stage', stageText);

  // Redirect to the new page
  window.location.href = 'price.html';
});

// Ignore the error related to 'interest-cohort' feature
window.addEventListener('error', function(e) {
  if (e.message === "Permissions-Policy header: 'interest-cohort' is not a recognized directive.") {
    e.preventDefault();
  }
});

document.getElementById('admin-button').addEventListener('click', function() {
  document.getElementById('admin-panel').classList.remove('hidden');
});

document.addEventListener('DOMContentLoaded', (event) => {
  var isoOptions = document.querySelectorAll('.iso-option');
  var nextButton = document.getElementById('next-button');

  // Initially disable the Next button
  nextButton.disabled = true;

  isoOptions.forEach(function(option) {
      option.addEventListener('click', function() {
          // When an option is clicked, store the ISO name (id of the div) in localStorage
          localStorage.setItem('selectedISO', this.id);

          // Add a class to show the user which ISO is selected
          isoOptions.forEach(function(opt) {
              opt.classList.remove('selected');
          });
          this.classList.add('selected');

          // Enable the Next button
          nextButton.disabled = false;
      });
  });

  nextButton.addEventListener('click', function() {
      // Hide the ISO selection and show the main content when Next is clicked
      document.getElementById('certification-selection').style.display = 'none';
      document.getElementById('main-content').style.display = 'block';
  });
});
