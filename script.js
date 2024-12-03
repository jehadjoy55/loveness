// Get references to HTML elements
const displayedImage = document.getElementById('displayedImage');
const nextButton = document.getElementById('nextButton');

// Variable to track the current image
let currentImageIndex = 1;

// Event listener for the "Next" button
nextButton.addEventListener('click', () => {
    // Toggle between image 1 and image 2
    currentImageIndex = currentImageIndex === 1 ? 2 : 1;
    displayedImage.src = `${currentImageIndex}.jpg`;
});

// Optional: Manage background music
const backgroundMusic = document.getElementById('backgroundMusic');
// Example: Pause the music programmatically
// backgroundMusic.pause();
// Example: Resume the music programmatically
// backgroundMusic.play();

