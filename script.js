function calculateBudget() {
    var days = parseInt(document.getElementById("days").value);
    var people = parseInt(document.getElementById("people").value);
    var food = document.getElementById("food").checked;
    var transport = document.getElementById("transport").checked;
    var lodging = document.getElementById("lodging").checked;
  
    var budget = 0;
    if (food) budget += 50 * days * people;
    if (transport) budget += 25 * days * people;
    if (lodging) budget += 100 * days * people;
  
    document.getElementById("result").value = 90;
  }
  
  window.addEventListener('load', calculateBudget);
