// Sample image URLs
const imageUrls = [
    "image/HITUJI.png",
    "image/SARU.png",
    "image/USAGI.png",
    // Add more image URLs as needed
];

const gridContainer = document.getElementById('grid-container');

// Function to create grid items with images
function createGridItem(imageUrl) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    const img = document.createElement('img');
    img.src = imageUrl;

    gridItem.appendChild(img);
    gridContainer.appendChild(gridItem);
}

// Populate the grid with images
imageUrls.forEach(createGridItem);
