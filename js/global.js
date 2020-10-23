/* Changing the position of the header from column to row => flexbox */
const header = document.querySelector('.header');
const headerContainer = document.querySelector('.header > .container');
const contactLink = document.querySelector('.cl');
const navbar = document.querySelector('.header__navbar');
window.addEventListener('scroll', () => {

    headerContainer.classList.toggle('scrollContainer', document.body.scrollTop > 80 || document.documentElement.scrollTop > 80);
    navbar.classList.toggle('flexZero', document.body.scrollTop > 80 || document.documentElement.scrollTop > 80);
    header.classList.toggle('scrollHeader', document.body.scrollTop > 80 || document.documentElement.scrollTop > 80);

});

/* collapse the navbar on small devices*/
if(window.innerWidth <= 767) {
    const toggler = document.querySelector('.toggler');
    const backUp = document.createElement('nav');
    backUp.innerHTML = `<a href="index.html" class="btn header__link">Home</a>
                        <a href="about.html" class="btn header__link">About us</a>
                        <a href="services.html" class="btn header__link">Services</a>
                        <a href="contact.html" class="btn header__link">Contact us</a>`;

    backUp.classList.add('backupNavbar');

    header.appendChild(backUp);

    toggler.addEventListener('click', () => {
        backUp.classList.toggle('active');
    });
}