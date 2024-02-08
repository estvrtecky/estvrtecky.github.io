document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function() {
    var homeButton = document.getElementById('home-button');
    var homeRect = document.getElementById('home').getBoundingClientRect();

    if (homeRect.bottom <= 0) {
        homeButton.style.display = 'inline';
    } else {
        homeButton.style.display = 'none';
    }
});