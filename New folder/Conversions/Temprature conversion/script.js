const result = document.querySelector("#result");
const display = document.querySelector("#display");
const input = document.querySelector("#start");

// adding event listener to input field

input.addEventListener("input", validation);

// validation function

function validation() {
  const inputVal = parseFloat(input.value);
  if (isNaN(inputVal)) {
    display.innerHTML = "Please enter a valid number";
    result.innerHTML = "";
  } else if(input.value.trim() === "") {
    display.innerHTML = "";
    result.innerHTML = "";
  } else {
    display.innerHTML = "";
    userSelection(inputVal);
  }
}

// user selection function

function userSelection(inputVal) {
  const foption = document.querySelector("#f-option").value;
  const toption = document.querySelector("#t-option").value;
  let resultValue;
  if (foption === "fahrenheit" && toption === "celsius") {
    resultValue = fahrenheitToCelsius(inputVal);
  } else if(foption === "celsius" && toption === "fahrenheit") {
    resultValue = celsiusToFahrenheit(inputVal);
  }
  result.innerHTML = resultValue;
}

// Conversion functions

function fahrenheitToCelsius(input) {
    const celsius = (input - 32) * 5 / 9;
    return celsius.toFixed(2) + " celsius";
}

function celsiusToFahrenheit(input) {
    const fahrenheit = (9/5 * input) + 32;
    return fahrenheit.toFixed(2) + " fahrenheit";
}


