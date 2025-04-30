document.addEventListener('DOMContentLoaded', function() {
    // Function to highlight the current section in the nav
    function highlightNav() {
        const sections = document.querySelectorAll('section[id]');
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.Navbar a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    // Add scroll event listener
    window.addEventListener('scroll', highlightNav);

    // Initial call to set the correct state if the page loads with a hash
    highlightNav();
});