function updateFillColor(value) {
  const earPath = document.querySelector("#ear path");

  // Set the fill color based on the value
  const red = Math.min(255, Math.round((value / 100) * 255));
  const green = Math.min(255, Math.round(((100 - value) / 100) * 255));

  earPath.setAttribute("fill", `rgb(${red}, ${green}, 0)`);
}

function graduallyChangeFillColor() {
  const valueDiv = document.getElementById("value");
  let value = 1;
  function changeColor() {
    updateFillColor(value);

    // Increase the value
    value++;
    valueDiv.innerHTML = value;
    // Exit the loop if the value reaches 100
    if (value <= 99) {
      // Call the function recursively with a delay
      setTimeout(changeColor, 50);
    }
  }

  // Start the loop
  changeColor();
}

// Call the function to gradually change the fill color
graduallyChangeFillColor();
