var a = document.querySelector('article');
var articleHeight = a.offsetHeight;

var windowHeight = window.innerHeight;

var p = document.getElementById('progress');
var s = document.getElementById('hsvg');

document.onscroll = function() {
  p.style.width = (window.pageYOffset / (document.querySelector('article').offsetHeight - windowHeight) * 100) + '%';
  s.style.transform = 'translateY(' + window.pageYOffset * -.5 + 'px)';
  s.style.opacity = window.pageYOffset * -.004 + 1;
};