burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightNav = document.querySelector('.rightNav')
navList = document.querySelector('.nav-list')
prev = document.querySelector('.prev')
next = document.querySelector('.next')
const slides = document.querySelectorAll('.slider img');

let slideIndex = 0;


burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav-resp')
    navList.classList.toggle('v-class-resp')
    rightNav.classList.toggle('v-class-resp')
    burger.classList.toggle('burger-top')
})


function showSlides() {
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    slides.forEach((slide) => (slide.style.display = 'none'));
    slides[slideIndex].style.display = 'block';
}

function nextSlide() {
    slideIndex++;
    showSlides();
}

function prevSlide() {
    slideIndex--;
    showSlides();
}

showSlides();

prev.addEventListener('click',prevSlide);
next.addEventListener('click',nextSlide);