document.addEventListener('DOMContentLoaded', function() {

    // Fade in effect for sections as they come into view
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transition = 'all 1s ease-out';
        section.style.transform = 'translateY(50px)';
        observer.observe(section);
    });

    // Parallax effect for the background video
    window.addEventListener('scroll', function() {
        const video = document.getElementById('bg_video');
        const scrollPosition = window.scrollY;
        video.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    });

    // Hover effect for images with rotation
    document.querySelectorAll('.Column_2 img').forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.5s ease-in-out';
            this.style.transform = 'rotate(5deg)';
        });
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'rotate(0deg)';
        });
    });

    // Pulse animation for contact form submit button
    const submitButton = document.querySelector('form input[type="submit"]');
    if (submitButton) {
        setInterval(function() {
            submitButton.style.animation = 'none';
            setTimeout(function() {
                submitButton.style.animation = 'pulse 2s infinite';
            }, 0);
        }, 1000);
    }

});

// Keyframe for pulse animation
const styleSheet = document.createElement('style');
styleSheet.textContent = `
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}`;
document.head.appendChild(styleSheet);

// These functions open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// This function displays the first image in the slideshow when the page loads
var slideIndex = 1;
showSlides(slideIndex);

// This function changes the slide when the left or right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// This function changes the slide when the dots are clicked
function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    var slides = document.getElementsByClassName("mySlides"); // This takes all elements with the class name "mySlides" and stores them in the variable array "slides"
    var dots = document.getElementsByClassName("dot"); // This takes all elements with the class name "dot" and stores them in the variable array "dots"
    if (n > slides.length) {slideIndex = 1}; // If n (the number passed into the function) is greater than the length of the array "slides", the slideIndex is set to 1
    if (n < 1) {slideIndex = slides.length}; // If n (the number passed into the function) is less than 1, te slideIndex is set to the length of the array "slides"
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // This for loop takes each item in the array "slides" and sets the display to none
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); // This for loop takes each item in the array "dots" and removes "active" which removes the active styling
    }
    slides[slideIndex - 1].style.display = "block"; // This displays the image in the slideshow
    dots[slideIndex - 1].className += " active"; // This adds the active styling to the dot associated with the image
}

// This code will create close the contact form when the user clicks off of it
// The first step is to add an event listener for any clicks on the website
document.addEventListener("click", function(event){
    // Here we state that if the click happens on the cancel button OR anywhere that is not the contact form AND the click does not happen on any element with the contact class then call the closeForm() function
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
        closeForm()
    }
}, false )