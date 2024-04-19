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
  if (foption === "fluid ounces" && toption === "milliliters") {
    resultValue = fluidOuncesToMilliliter(inputVal);
  } else if(foption === "gallons" && toption === "liters") {
    resultValue = gallonsToLiters(inputVal);
  } else if(foption === "cubic feet" && toption === "cubic meters") {
    resultValue = cubicFtToCubicMeters(inputVal);
  } else if(foption === "cubic yards" && toption === "cubic meters") {
    resultValue = cubicYardsToCubicMeters(inputVal);
  }
  result.innerHTML = resultValue;
}

// Conversion functions

function fluidOuncesToMilliliter(input) {
    const milliliters = input * 29.574;
    return milliliters.toFixed(2) + " millimeters";
}

function gallonsToLiters(input) {
    const liters = input * 3.785;
    return liters.toFixed(2) + " liters";
}

function cubicFtToCubicMeters(input) {
    const cubicMeters = input / 35.315;
    return cubicMeters.toFixed(2) + " cubic meters";
}

function cubicYardsToCubicMeters(input) {
    const cubicMeters = input / 1.308;
    return cubicMeters.toFixed(2) + " cubic meters";
}

