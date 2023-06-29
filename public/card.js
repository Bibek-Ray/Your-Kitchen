const cards = document.querySelectorAll('.cardplay');

cards.forEach((card, index) => {
  card.addEventListener('mouseover', () => {
    for (let i = 0; i < index; i++) {
      cards[i].classList.add('effects');
    }
    for (let i = index + 1; i < cards.length; i++) {
      cards[i].classList.add('effects');
    }
  });

  card.addEventListener('mouseout', () => {
    cards.forEach((card) => {
      card.classList.remove('effects');
    });
  });
});

window.addEventListener('load', function() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(function(element) {
    element.classList.add('visible');
  });
});
