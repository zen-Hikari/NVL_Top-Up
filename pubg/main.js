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


// search
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
