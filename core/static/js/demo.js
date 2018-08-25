document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: '#000000',
    lineColor: '#757575',
    density: 11000,
    particleRadius: 5,
    lineWidth: 0.5,
    parallaxMultiplier:12
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);

