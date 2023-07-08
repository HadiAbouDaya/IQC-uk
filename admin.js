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

  displayNotification("New values are set!");
});

document.getElementById('reset-defaults-btn').addEventListener('click', function() {

  // Saving FeesPerAMD and LicenseFee in local storage
  document.getElementById('FeesPerAMD').value = 1000
  localStorage.setItem('FeesPerAMD', 1000);
  document.getElementById('LicenseFee').value = 2000
  localStorage.setItem('LicenseFee', 2000);
  // Display a notification
  displayNotification("Default values are set!");
});

function displayNotification(message) {
  // Create a notification element
  var notification = document.createElement('div');
  notification.classList.add('notification');
  notification.textContent = message;

  // Append the notification to the document body
  document.body.appendChild(notification);

  // Remove the notification after a delay
  setTimeout(function() {
    document.body.removeChild(notification);
  }, 3000);
}