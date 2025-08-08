 function convertTemp() {
      const celsius = document.getElementById('celsiusInput').value;
      const fahrenheit = (celsius * 9/5) + 32;
      document.getElementById('fahrenheitResult').textContent = 
      Number.isInteger(fahrenheit) ? fahrenheit : fahrenheit.toFixed(2) + " °F";
}