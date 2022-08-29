const burger = document.querySelector('.burger');
const navUl = document.getElementById('nav-ul');

const navSlide = () => {
    burger.addEventListener('click', () => {
        burger.classList.toggle('toggle');
        navUl.classList.toggle('show');
    });
}

navSlide();