window.onload = function() {
    let images = document.querySelectorAll('.portfolio img');
    images.forEach(img => {
        img.style.opacity = '1'; // Set opacity to 1 after page load
        img.style.transition = 'opacity 1s ease-in-out';
    });
};
