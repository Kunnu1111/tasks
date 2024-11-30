// Array of image paths
const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg",
    "images/image6.jpg",
    "images/image7.jpg",
    "images/image8.jpg",
    "images/image9.jpg",
    "images/image10.jpg",
    "images/image11.jpg",
    "images/image12.jpg"
];

let currentImageIndex = 0;

// Open lightbox and display selected image
function openLightbox(index) {
    console.log(`Opening lightbox for image index: ${index}`);

    currentImageIndex = index;
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");

    lightboxImage.src = images[index]; // Set the image source
    lightbox.style.display = "flex";  // Show the lightbox
}

// Close the lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Navigate through images
function changeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length; // Loop images
    document.getElementById("lightboxImage").src = images[currentImageIndex];
}
