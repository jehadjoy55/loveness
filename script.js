const displayedImage = document.getElementById('displayedImage');
const nextButton = document.getElementById('nextButton');

// Tracks the current image index
let currentImageIndex = 1;

nextButton.addEventListener('click', () => {
    currentImageIndex = currentImageIndex === 1 ? 2 : 1;
    displayedImage.src = `${currentImageIndex}.jpg`;
});
