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
  if (foption === "square inches" && toption === "square millimeters") {
    resultValue = sqInchToSqMillimeters(inputVal);
  } else if(foption === "square feet" && toption === "square meters") {
    resultValue = sqFtToSqMeter(inputVal);
  } else if(foption === "sqaure yards" && toption === "square meters") {
    resultValue = sqYardToSqMeter(inputVal);
  } else if(foption === "acres" && toption === "hectares") {
    resultValue = acresToHectares(inputVal);
  } else if(foption === "square miles" && toption === "square kilometers") {
    resultValue = sqMilesToSqKm(inputVal);
  }
  result.innerHTML = resultValue;
}

// Conversion functions

function sqInchToSqMillimeters(input) {
    const sqMillimeters = input * 645.2;
    return sqMillimeters.toFixed(2) + " square millimeters";
}

function sqFtToSqMeter(input) {
    const sqMeters = input / 10.764;
    return sqMeters.toFixed(2) + " square meters";
}

function sqYardToSqMeter(input) {
    const sqMeters = input / 1.196;
    return sqMeters.toFixed(2) + " square meters";
}

function acresToHectares(input) {
    const hectares = input / 2.471;
    return hectares.toFixed(2) + " hectares";
}

function sqMilesToSqKm(input) {
    const sqKm = input * 2.59;
    return sqKm.toFixed(2) + " square kilometer";
}
