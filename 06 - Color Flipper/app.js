// Array of possible characters for hexadecimal color codes
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

// Selecting the button element with class "btn" from the HTML document
const btn = document.querySelector('.btn');

// Selecting the element with class "color" from the HTML document
const color = document.querySelector('.color');

// Adding a click event listener to the button
btn.addEventListener('click', function() {
    let hexColor = "#"; // Starting with "#" for hexadecimal color code

    // Generating a 6-character random hexadecimal color code
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]; // Adding random characters from the hex array
    }

    // Updating the displayed color code text
    color.textContent = hexColor;

    // Changing the webpage background color to the generated color
    document.body.style.backgroundColor = hexColor;
});

// Function to generate a random index for the hex array
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length); // Returns a random integer between 0 and hex.length - 1
}
