// Tour detail page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Thumbnail gallery
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.main-image');
    
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', function() {
            // Remove active class from all thumbnails
            thumbnails.forEach(t => t.classList.remove('active'));
            // Add active class to clicked thumbnail
            this.classList.add('active');
            // Update main image (in real app would change src)
            mainImage.textContent = `Изображение Кремля ${index + 1}`;
        });
    });
});