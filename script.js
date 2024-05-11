// Function to display numbers and operators in the input field
function dis(val) {
  document.getElementById("result").value += val;
}

// Function to clear the input field
function clr() {
  document.getElementById("result").value = "";
}

// Function to calculate and display the result
function solve() {
  let expression = document.getElementById("result").value;
  let result;

  try {
    result = eval(expression); // Evaluate the expression

    // Check if the result is NaN or infinite
    if (isNaN(result) || !isFinite(result)) {
      throw new Error("Invalid input");
    }

    // Display the result
    document.getElementById("result").value = result;
  } catch (error) {
    // Alert the user if there's an error
    alert("Error: " + error.message);
    clr(); // Clear the input field in case of error
  }
}
