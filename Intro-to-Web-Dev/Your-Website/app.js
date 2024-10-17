// Define an array of colors
const colors = ["lightblue", "lightgreen", "lightcoral", "lightyellow", "lightpink"];
let currentColorIndex = 0; // Keep track of the current color index

document.getElementById("myButton").addEventListener("click", function() {
    // Change the background color
    document.body.style.backgroundColor = colors[currentColorIndex];

    // Update the current color index, cycling back to 0 when we reach the end of the array
    currentColorIndex = (currentColorIndex + 1) % colors.length;
    
    // Optionally, change the image (this part of your original code)
    document.getElementById("myImage").src = "https://via.placeholder.com/300";
});
