document.addEventListener('DOMContentLoaded', function() {
  var sektionen = document.querySelectorAll('.akkordeon .sektion');

  sektionen.forEach(function(sektion, index) {
    sektion.style.setProperty('--index', index);
    sektion.addEventListener('click', toggleSektion);
  });

  var buttons = document.querySelectorAll('.akkordeon .sektion button');

  buttons.forEach(function(button) {
    button.addEventListener('click', function(event) {
      event.stopPropagation();
    });
  });

  function toggleSektion(event) {
    if (event.target.tagName === 'TEXTAREA') {
      event.stopPropagation();
      return;
    }

    var aktiveSektion = document.querySelector('.akkordeon .sektion.aktiv');

    if (aktiveSektion && aktiveSektion !== this) {
      aktiveSektion.classList.remove('aktiv');
    }

    this.classList.toggle('aktiv');
  }
});