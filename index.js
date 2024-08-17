let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150 ;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top > offset && top < offset + height) {
            navLinks.forEach(links => {
                console.log('hello')
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            });
        };
    });
    let header = document.querySelector('header')
    header.classList.toggle('sticky' , window.scrollY >  100)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
ScrollReveal({ 
    reset: true,
    distance:'60px', 
    duration:1000,
    delay: 100
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .home-portfolio, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img, .home-portfolio, .contact form', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});


