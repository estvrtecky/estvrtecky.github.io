document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function() {
    var homeNav = document.getElementById('home-nav');
    var mainNav = document.getElementById('main-nav');
    var homeRect = document.getElementById('home').getBoundingClientRect();

    if (homeRect.bottom <= 0) {
        homeNav.style.display = 'none';
        mainNav.style.display = 'flex';
    } else {
        homeNav.style.display = 'flex';
        mainNav.style.display = 'none';
    }
});