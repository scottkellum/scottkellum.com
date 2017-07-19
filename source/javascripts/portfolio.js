var article = document.getElementById('main');
var width = window.innerWidth;
var height = window.innerHeight;

// Distribute eleemnts
var topSum = -10;
// loop through portfolio sections to place
for (var i = 0; i < article.children.length; i++) {
  var section = article.children[i];
  section.style.left = Math.random() * 60 + 10 + 'vw';
  topSum = (Math.random() * 20) + 15 + topSum;
  section.style.top = topSum + 'vw';

  var depth = Math.random() * -20;
  section.style.transform = 'translateZ(' + depth + 'vw)';
  section.style.zIndex = Math.round(depth * 20);
}

// Mouse tracking
(function() {
  document.onmousemove = handleMouseMove;
  function handleMouseMove(event) {
    var dot, eventDoc, doc, body, pageX, pageY;

    event = event || window.event; // IE-ism

    // If pageX/Y aren't available and clientX/Y are,
    // calculate pageX/Y - logic taken from jQuery.
    // (This is to support old IE)
    if (event.pageX == null && event.clientX != null) {
      eventDoc = (event.target && event.target.ownerDocument) || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;

      event.pageX = event.clientX +
        (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
        (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = event.clientY +
        (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
        (doc && doc.clientTop  || body && body.clientTop  || 0 );
    }

    // Use event.pageX / event.pageY here
    var x = event.pageX / width * 100 + '%';
    var y = event.pageY / height * 100 + '%';
    article.style.perspectiveOrigin = x + ' ' + y;
  }
})();

function handleOrientation(event) {
  var y = event.beta;  // In degree in the range [-180,180]
  var x = event.gamma; // In degree in the range [-90,90]

  x = (x + 180) / 3.6 + '%';
  y = (y + 90)  / 1.8 + '%';

  article.style.perspectiveOrigin = x + ' ' + y;
}
window.addEventListener('deviceorientation', handleOrientation);




// PAGING
function expand(e) {
  e.classList.toggle('active');
};