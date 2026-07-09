// Select image
const dogImage = document.getElementById("dogImage");

// Select button
const button = document.getElementById("generateBtn");

// Generate a new dog image
button.addEventListener("click", () => {

    // Add timestamp to prevent browser caching
    dogImage.src = `https://place.dog/300/200?${Date.now()}`;

});