document.addEventListener('DOMContentLoaded', function() {
    const zoomableImages = document.querySelectorAll('.zoomable');

    zoomableImages.forEach(image => {
        image.addEventListener('click', () => {
            toggleImageZoom(image);
        });
    });

    // Function to toggle image zoom
    function toggleImageZoom(image) {
        const enlargedContainer = document.createElement('div');
        enlargedContainer.classList.add('enlarged-img');

        const enlargedImage = document.createElement('img');
        enlargedImage.src = image.src;

        enlargedContainer.appendChild(enlargedImage);

        enlargedContainer.addEventListener('click', () => {
            document.body.removeChild(enlargedContainer);
        });

        document.body.appendChild(enlargedContainer);
    }
});