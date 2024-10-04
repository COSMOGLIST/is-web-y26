const navLinks = document.getElementsByClassName("navigation_button_link");
const currentPage = document.location.toString().split('/').pop();
for (let i = 0; i < navLinks.length; i++) {
    if (navLinks[i].getAttribute('href') === currentPage) {
        navLinks[i].classList.add('navigation_button_link--active');
    }
}