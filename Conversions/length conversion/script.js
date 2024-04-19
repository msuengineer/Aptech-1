// Get references to DOM elements
const result = document.querySelector("#result");
const display = document.querySelector("#err-disp");
const input = document.querySelector("#f-unit");

// Add event listener to input field
input.addEventListener("input", validation);

// Validation function
function validation() {
    const inputValue = parseFloat(input.value);
    if (isNaN(inputValue)) {
        display.innerHTML = "Please provide a valid number";
    } else {
        display.innerHTML = ""; // Clear any previous error message
        userSelection(inputValue);
    }
}

// User selection function
function userSelection(inputValue) {
    const foption = document.querySelector('#f-option').value;
    const toption = document.querySelector('#t-option').value;

    let resultValue;
    if (foption === "inches" && toption === "millimeters") {
        resultValue = inchesToMillimeters(inputValue);
    } else if (foption === "feet" && toption === "meters") {
        resultValue = feetToMeters(inputValue);
    } else if (foption === "yards" && toption === "meters") {
        resultValue = yardsToMeters(inputValue);
    } else if (foption === "miles" && toption === "kilometers") {
        resultValue = milesToKilometers(inputValue);
    }

    result.innerHTML = resultValue; // Display the result
}

// Conversion functions
function inchesToMillimeters(input) {
    const millimeters = input * 25.4;
    return millimeters.toFixed(2) + " millimeters";
}

function feetToMeters(input) {
    const meters = input / 3.281;
    return meters.toFixed(2) + " meters";
}

function yardsToMeters(input) {
    const yards = input / 1.094;
    return yards.toFixed(2) + " meters";
}
function milesToKilometers(input) {
    const miles = input * 1.609;
    return miles.toFixed(2) + " kilometers";
}
