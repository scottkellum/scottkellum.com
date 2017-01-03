var a = document.querySelector('article');
var articleHeight = a.offsetHeight;

var windowHeight = window.innerHeight;

var p = document.getElementById('progress');

console.log(a.t);

document.onscroll = function() {
  p.style.width = (window.pageYOffset / (document.querySelector('article').offsetHeight - windowHeight) * 100) + '%';
};