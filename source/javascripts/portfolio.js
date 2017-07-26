var article = document.getElementById('main');
var viewHeight = window.innerHeight;

var scroller = article.querySelectorAll('.scroller');

article.onscroll = function() {
  for (var i = 0; i < scroller.length; i++) {
    var scrollDistance = (scroller[i].offsetParent.offsetTop + scroller[i].offsetTop - article.scrollTop - viewHeight + (scroller[i].offsetHeight/2)) / viewHeight * 100;
    if(scrollDistance < 0 && scrollDistance > -100) {
      scroller[i].classList.add('animate');
    } else {
      scroller[i].classList.remove('animate');
    }
  }
};