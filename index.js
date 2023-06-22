const temperatureForm = document.getElementById('temperature-form-1');
const temperatureForm2 = document.getElementById('temperature-form-2');
const label1 = document.getElementById('label-1');
const label2 = document.getElementById('label-2');
const resetBtn = document.getElementById('reset-btn');
const reverseBtn = document.getElementById('reverse-btn');
const temperatureInput = document.getElementById('temperature');
const temperatureInput2 = document.getElementById('temperature-2');
const conversionResult = document.getElementById('conversion-result');
const conversionExplanation1 = document.getElementById('conversion-explanation-1');
const conversionExplanation2 = document.getElementById('conversion-explanation-2');
const formulaText = document.getElementById('formula');

temperatureForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formula = label1.textContent;
  const input = parseFloat(temperatureInput.value);
  const result = formula === 'Celcius' ? convertToFahrenheit(input) : convertToCelsius(input)
  temperatureInput2.value = result
  conversionResult.classList.remove('hidden');
  formulaText.value = formula === 'Celcius' ? `${input}°C * (9 / 5) + 32 = ${result}°F` : `(${input}°F - 32) * 5 / 9 = ${result}°C`
  formula === 'Celcius' ? conversionExplanation1.classList.remove('hidden') : conversionExplanation2.classList.remove('hidden')
});

resetBtn.addEventListener('click', () => {
  temperatureInput.value = '';
  temperatureInput2.value = '';
  conversionResult.classList.add('hidden');
  conversionExplanation1.classList.add('hidden');
  conversionExplanation2.classList.add('hidden');
});

reverseBtn.addEventListener('click', () => {
  temperatureInput.value = '';
  temperatureInput2.value = '';
  conversionResult.classList.add('hidden');
  conversionExplanation1.classList.add('hidden');
  conversionExplanation2.classList.add('hidden');
  if (label1.textContent === 'Celcius') {
    label1.textContent = 'Fahrenheit'
    label2.textContent = 'Celcius'
  } else {
    label1.textContent = 'Celcius'
    label2.textContent = 'Fahrenheit'
  }
});

function convertToCelsius(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5 / 9;
  return celsius.toFixed(2);
}

function convertToFahrenheit(celsius) {
  const fahrenheit = (celsius * 9 / 5) + 32;
  return fahrenheit.toFixed(2);
}

