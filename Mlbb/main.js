// navbar
const navMenu = document.querySelector(".search");

function active() {
    navMenu.classList.toggle("active");
}

window.onscroll = () => {
    navMenu.classList.remove("active");
};

window.addEventListener('scroll', function() { 
    const header = this.document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});


