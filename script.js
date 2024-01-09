// Function to update the value and fill color
function updateValueAndFill() {
  const outlinePath = document.getElementById("outlinePath");
  const valueElement = document.getElementById("value");

  function updateFill(value) {
    const percentage = value / 100;
    const fillColor = `rgb(${Math.round(255 * percentage)}, ${
      255 - Math.round(255 * percentage)
    }, 0)`;
    outlinePath.style.fill = fillColor;
  }

  // Update the value and fill color periodically
  setInterval(function () {
    const randomValue = Math.floor(Math.random() * 101);
    valueElement.innerHTML = randomValue;
    updateFill(randomValue);
  }, 1000); // Change every second
}

// Call the function to update the value and fill color
updateValueAndFill();
