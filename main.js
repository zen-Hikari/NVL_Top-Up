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



// img slider 
let index = 0;

function showSlide(n) {
  const slides = document.querySelectorAll('.img-slider img');
  const totalSlides = slides.length;

  if (n >= totalSlides) index = 0;
  if (n < 0) index = totalSlides - 1;

  const offset = -index * 100;
  document.querySelector('.img-slider').style.marginLeft = `${offset}%`;

  updateNavigation(index);
}

function updateNavigation(index) {
  const navLinks = document.querySelectorAll('.navigation a');
  navLinks.forEach((link, i) => {
    if (i === index) {
      link.classList.add('active'); // Highlight the active dot
    } else {
      link.classList.remove('active');
    }
  });
}

function nextSlide() {
  index++;
  showSlide(index);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds

document.querySelectorAll('.navigation a').forEach((link, i) => {
  link.addEventListener('click', () => {
    index = i;
    showSlide(index);
  });
});

showSlide(index);


// search

  // Fungsi untuk memfilter kartu berdasarkan input pencarian
  document.getElementById('filter').addEventListener('input', function() {
    var filter = this.value.toLowerCase();
    var cards = document.getElementsByClassName('card-menu');

    for (var i = 0; i < cards.length; i++) {
      var gameName = cards[i].getElementsByClassName('game-name')[0].innerText.toLowerCase();
      if (gameName.indexOf(filter) > -1) {
        cards[i].style.display = "";
      } else {
        cards[i].style.display = "none";
      }
    }
  });
