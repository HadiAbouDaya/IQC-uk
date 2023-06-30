// price.js
window.onload = function() {

    var certName = localStorage.getItem('selectedISO')
    if (!(certName === null)){ certName = certName.replace("iso-", "ISO ").toUpperCase(); }

    // Load the price and audit days
    var auditDays = localStorage.getItem('auditDays');
    var totalPrice = localStorage.getItem('totalPrice');

    // Load the user's selections
    var employeeRange = localStorage.getItem('employeeRange');
    var riskLevel = localStorage.getItem('riskLevel');
    var stage = localStorage.getItem('stage');

if (!auditDays || !totalPrice || !employeeRange || !riskLevel || !stage) {
    window.location.href = "index.html"; // Assuming that the main page is "index.html"
    localStorage.removeItem('selectedISO');
} else {
  var quoteTitle = document.getElementById('quote-title');
  // Set the text content of the <h1> tag
  quoteTitle.textContent = "Quotation for " + certName;
  localStorage.removeItem('selectedISO'); // Optional: remove the item from storage now that we've retrieved it

  document.getElementById('auditDays').innerText = auditDays;
  localStorage.removeItem('auditDays'); // Optional: remove the item from storage now that we've retrieved it

  document.getElementById('totalPrice').innerText = totalPrice;
  localStorage.removeItem('totalPrice'); // Optional: remove the item from storage now that we've retrieved it

  // Populate the summary
    document.getElementById('summaryEmployees').innerText = "Number of Employees: " + employeeRange;
    localStorage.removeItem('employeeRange'); // Optional: remove the item from storage now that we've retrieved it

    document.getElementById('summaryRiskLevel').innerText = "Risk Level: " + riskLevel;
    localStorage.removeItem('riskLevel'); // Optional: remove the item from storage now that we've retrieved it

    document.getElementById('summaryStages').innerText = "Stages: " + stage;
    localStorage.removeItem('stage'); // Optional: remove the item from storage now that we've retrieved it

      document.getElementById('auditDays').innerText = 'Audit Man Days: ' + auditDays;
      document.getElementById('totalPrice').innerText = totalPrice;
      document.getElementById('summaryEmployees').innerText = "Number of Employees: " + employeeRange;
      document.getElementById('summaryRiskLevel').innerText = "Risk Level: " + riskLevel;
      document.getElementById('summaryStages').innerText = "Stages: " + stage;

    var originalAuditDays = localStorage.getItem('originalAuditDays');
    var surveillanceYear1 = Math.round(originalAuditDays / 3);
    var surveillanceYear2 = Math.round(originalAuditDays / 3);
    var reassessment = Math.round((originalAuditDays * 2) / 3);
    localStorage.removeItem('originalAuditDays');

        document.getElementById('surveillanceYear1').innerText = 'Surveillance year 1: ' + surveillanceYear1;
        document.getElementById('surveillanceYear2').innerText = 'Surveillance year 2: ' + surveillanceYear2;
        document.getElementById('reassessment').innerText = 'Reassessment: ' + reassessment;
}
};

