// Get references to HTML elements
const loveButton = document.getElementById('loveButton');
const backgroundMusic = document.getElementById('backgroundMusic');
const contentContainer = document.getElementById('contentContainer');
const displayedImage = document.getElementById('displayedImage');
const nextButton = document.getElementById('nextButton');

// Variable to track the current image
let currentImageIndex = 1;

// Event listener for the "Love" button
loveButton.addEventListener('click', () => {
    // Play the music
    backgroundMusic.play();

    // Show the content container
    contentContainer.classList.remove('hidden');

    // Hide the Love button
    loveButton.style.display = 'none';
});

// Event listener for the "Next" button
nextButton.addEventListener('click', () => {
    // Toggle between image 1 and image 2
    currentImageIndex = currentImageIndex === 1 ? 2 : 1;
    displayedImage.src = `${currentImageIndex}.jpg`;
});
