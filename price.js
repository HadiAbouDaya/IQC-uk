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
  quoteTitle.textContent = certName;
  localStorage.removeItem('selectedISO'); // Optional: remove the item from storage now that we've retrieved it

  document.getElementById('auditDays').innerText = auditDays;
  var decimalAuditDays = auditDays % 1;
  if (decimalAuditDays >= 0.5) {
    auditDays = Math.ceil(auditDays);
  } else {
    auditDays = Math.floor(auditDays);
  }
  if (auditDays === 0) {
    auditDays = 1;
  }
  localStorage.removeItem('auditDays'); // Optional: remove the item from storage now that we've retrieved it

  document.getElementById('totalPrice').innerText = totalPrice;
  var decimalTotalPrice = totalPrice % 1;
  if (decimalSurveillanceYear1 >= 0.5) {
    totalPrice = Math.ceil(totalPrice);
  } else {
    totalPrice = Math.floor(totalPrice);
  }
  if (totalPrice === 0) {
    totalPrice = 1;
  }
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

    var decimalSurveillanceYear1 = surveillanceYear1 % 1;
    var decimalSurveillanceYear2 = surveillanceYear2 % 1;
    var decimalReassessment = reassessment % 1;

    if (decimalSurveillanceYear1 >= 0.5) {
      surveillanceYear1 = Math.ceil(surveillanceYear1);
    } else {
      surveillanceYear1 = Math.floor(surveillanceYear1);
    }
    if (surveillanceYear1 === 0) {
        surveillanceYear1 = 1;
    }

    if (decimalSurveillanceYear2 >= 0.5) {
      surveillanceYear2 = Math.ceil(surveillanceYear2);
    } else {
      surveillanceYear2 = Math.floor(surveillanceYear2);
    }
    if (surveillanceYear2 === 0) {
        surveillanceYear2 = 1;
    }

    if (decimalReassessment >= 0.5) {
      reassessment = Math.ceil(reassessment);
    } else {
      reassessment = Math.floor(reassessment);
    }
    if (reassessment === 0) {
      reassessment = 1;
    }

    localStorage.removeItem('originalAuditDays');

        document.getElementById('surveillanceYear1').innerText = 'Surveillance year 1: ' + surveillanceYear1;
        document.getElementById('surveillanceYear2').innerText = 'Surveillance year 2: ' + surveillanceYear2;
        document.getElementById('reassessment').innerText = 'Reassessment: ' + reassessment;
}
};

