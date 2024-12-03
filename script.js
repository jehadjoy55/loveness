const displayedImage = document.getElementById('displayedImage');
const nextButton = document.getElementById('nextButton');

let currentImageIndex = 1;

nextButton.addEventListener('click', () => {
    // Toggle between image 1 and image 2
    currentImageIndex = currentImageIndex === 1 ? 2 : 1;
    displayedImage.src = `${currentImageIndex}.jpg`;
});
