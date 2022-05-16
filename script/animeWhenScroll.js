// Script that add .active class to element who have to animate when scrolling

function scrollAnime() {
    let reveal = document.querySelectorAll('.reveal');

    for (i = 0; i< reveal.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveal[i].getBoundingClientRect().top;
        let elementVisible = 10;

        (elementTop < windowHeight - elementVisible) ? reveal[i].classList.add("active"):reveal[i].classList.remove("active");

    }

    
}

window.addEventListener('scroll', scrollAnime);

scrollAnime();