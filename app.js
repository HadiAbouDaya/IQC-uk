document.getElementById('get-price').addEventListener('click', function() {
    var input1 = parseInt(document.getElementById('input1').value);
    var dropdown1 = parseInt(document.getElementById('dropdown1').value);
    var dropdown2 = parseInt(document.getElementById('dropdown2').value);
    var dropdown3 = parseInt(document.getElementById('dropdown3').value);
  
    var result = input1 + dropdown1 + dropdown2 + dropdown3;
  
    document.getElementById('result').innerText = result;
  });
  