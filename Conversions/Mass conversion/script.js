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
  if (foption === "ounces" && toption === "grams") {
    resultValue = ouncesToGrams(inputVal);
  } else if(foption === "pounds" && toption === "kilograms") {
    resultValue = poundsToKg(inputVal);
  } else if(foption === "short tons (2000 lb)" && toption === 'mega grams (or "metric ton")') {
    resultValue = shortTonsToMegaGrams(inputVal);
  }
  result.innerHTML = resultValue;
}

// Conversion functions

function ouncesToGrams(input) {
    const grams = input * 28.35;
    return grams.toFixed(2) + " grams";
}

function poundsToKg(input) {
    const kg = input / 2.205;
    return kg.toFixed(2) + " kilograms";
}

function shortTonsToMegaGrams(input) {
    const megaGrams = input * 0.907185;
    return megaGrams.toFixed(3) + " mega grams or metric tons";
}

