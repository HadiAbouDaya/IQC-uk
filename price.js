// price.js
window.onload = function() {
  var auditDays = localStorage.getItem('auditDays');
  var totalPrice = localStorage.getItem('totalPrice');

  document.getElementById('auditDays').innerText = auditDays;
  localStorage.removeItem('auditDays'); // Optional: remove the item from storage now that we've retrieved it

  document.getElementById('totalPrice').innerText = totalPrice;
  localStorage.removeItem('totalPrice'); // Optional: remove the item from storage now that we've retrieved it
};
