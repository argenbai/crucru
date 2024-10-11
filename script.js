document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('slider');
    const sliderUl = slider.querySelector('ul');
    const slides = sliderUl.querySelectorAll('li');
    let currentIndex = 0;

    function showSlide(index) {
        sliderUl.style.transform = `translateX(-${index * 100}%)`;
    }

    slider.addEventListener('click', function(event) {
        const sliderWidth = slider.offsetWidth;
        const clickX = event.clientX;

        if (clickX > sliderWidth / 2) {
            // Click on the right side
            currentIndex = (currentIndex + 1) % slides.length;
        } else {
            // Click on the left side
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        }
        showSlide(currentIndex);
    });

    // Change cursor based on mouse position
    slider.addEventListener('mousemove', function(event) {
        const sliderWidth = slider.offsetWidth;
        const mouseX = event.clientX;

        if (mouseX > sliderWidth / 2) {
            slider.classList.add('cursor-right');
            slider.classList.remove('cursor-left');
        } else {
            slider.classList.add('cursor-left');
            slider.classList.remove('cursor-right');
        }
    });

    // Request full screen on page load
    function requestFullScreen() {
        if (slider.requestFullscreen) {
            slider.requestFullscreen();
        } else if (slider.mozRequestFullScreen) { // Firefox
            slider.mozRequestFullScreen();
        } else if (slider.webkitRequestFullscreen) { // Chrome, Safari and Opera
            slider.webkitRequestFullscreen();
        } else if (slider.msRequestFullscreen) { // IE/Edge
            slider.msRequestFullscreen();
        }
    }

    // Trigger full screen on page load
    requestFullScreen();

    // Prevent image stretching and maintain aspect ratio
    window.addEventListener('resize', function() {
        showSlide(currentIndex);
    });

    // Show first slide initially
    showSlide(currentIndex);
});


