var a = document.querySelector('article');
var articleHeight = a.offsetHeight;

var windowHeight = window.innerHeight;

var p    = document.getElementById('progress');
var svg  = document.getElementById('hsvg');
var c    = document.getElementById('c');

var offset = 0;

document.onscroll = function() {
  var diff = offset - window.pageYOffset;
  offset = window.pageYOffset;
  if(p) {
    p.style.width = (window.pageYOffset / (document.querySelector('article').offsetHeight - windowHeight) * 100) + '%';
  };
  if(svg) {
    svg.style.transform = 'translateY(' + window.pageYOffset * -.5 + 'px)';
    svg.style.opacity = window.pageYOffset * -.004 + 1;
  };
  if(c) {
    pixel(10,diff);
  };
};

if(c) {
  c.width = c.offsetWidth;
  c.height = c.offsetHeight;

  var s = {};
  s.a = seed();
  s.b = seed();
  s.c = seed();

  ctx = c.getContext('2d');
  ctx.fillStyle = "rgba(255,255,255,.05)";
  ctx.fillRect(0,0,c.width,c.height);
  ctx.fillStyle = "rgba(0,183,180,.5)";

  pixel(Math.round(c.width * 100),0);
}

function seed() {
  return [Math.round(Math.random()*c.width),Math.round(Math.random()*c.height)];
}

function pixel(f,o) {
  for (var j = 0; j < f; j++) {
    for (var i=0 in s) {
      s[i][0] = s[i][0] + Math.round(Math.random()*4) - 2;
      s[i][1] = s[i][1] + Math.round(Math.random()*4) - 2 + (o/100);
      if (s[i][0] > c.width)  { s[i][0] = c.width; }
      if (s[i][0] < 0)       { s[i][0] = 0; }
      if (s[i][1] > c.height) { s[i][1] = c.height; }
      if (s[i][1] < 0)       { s[i][1] = 0; }
      ctx.fillRect(s[i][0],s[i][1],1,1);
    }
  }
}