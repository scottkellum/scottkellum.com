var article = document.getElementById('main');
var viewHeight = window.innerHeight;

var scroller = article.querySelectorAll('.scroller');

article.onscroll = function() {
  for (var i = 0; i < scroller.length; i++) {
    var scrollDistance = (scroller[i].offsetParent.offsetTop + scroller[i].offsetTop - article.scrollTop - viewHeight + (scroller[i].offsetHeight/2)) / viewHeight * 100;
    if(scrollDistance < 0 && scrollDistance > -86.6) {
      scroller[i].querySelector('img').style.transform = 'translateY(' + scrollDistance + '%)';
    }
    else if(scrollDistance > 0) {
      scroller[i].querySelector('img').style.transform = 'none';
    }
    else if(scrollDistance < -86.6) {
      scroller[i].querySelector('img').style.transform = 'translateY(-86.6%)';
    }
  }
};