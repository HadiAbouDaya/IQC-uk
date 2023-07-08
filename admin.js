// admin.js

// Declare FeesPerAMD and LicenseFee as global variables
var FeesPerAMD;
var LicenseFee;

document.getElementById('admin-form').addEventListener('submit', function(e) {
  e.preventDefault();
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  if (username === "admin" && password === "password123") {
    document.getElementById('fee-form').classList.remove('hidden');
    // Add the following line to hide the login form
    document.getElementById('admin-form').style.display = 'none';
  } else {
    alert('Invalid credentials.');
  }
});

document.getElementById('fee-form').addEventListener('submit', function(e) {
  e.preventDefault();
  FeesPerAMD = parseInt(document.getElementById('FeesPerAMD').value);
  LicenseFee = parseInt(document.getElementById('LicenseFee').value);
  // Saving FeesPerAMD and LicenseFee in local storage
  localStorage.setItem('FeesPerAMD', FeesPerAMD);
  localStorage.setItem('LicenseFee', LicenseFee);
});
