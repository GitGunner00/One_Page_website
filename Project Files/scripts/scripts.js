document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.Navbar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Video play/pause toggle for the background video
    const video = document.getElementById('bg_video');
    document.querySelector('.Video_Text').addEventListener('click', function() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

    // Dynamic text typing effect for the quote
    const quote = document.querySelector('.Video_Text q');
    let text = quote.innerText;
    quote.innerText = ''; // Clear the text
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            quote.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 30); // Speed of typing
        }
    }
    typeWriter();

    // Form submission handler
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting normally
        const name = document.getElementById('Name').value;
        const email = document.getElementById('Email').value;
        const phone = document.getElementById('Phone').value;
        const message = document.getElementById('Message').value;

        if (name && email && phone && message) { 
  fetch('contact.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, phone, message })
            })
            .then(response => {
                if (response.ok) {
                    alert('Thank you for your message! I will get back to you soon.');
                    form.reset(); // Clear the form
                } else {
                    alert('There was an error submitting your message. Please try again later.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('There was an issue submitting your message. Please try again later.');
            });
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Responsive image handling for GitHub logo
    window.addEventListener('resize', function() {
        const githubLogo = document.getElementById('Git');
        if (window.innerWidth <= 768) {
            githubLogo.style.maxWidth = '200px';
        } else {
            githubLogo.style.maxWidth = '350px';
        }
    });
});