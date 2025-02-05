---
title: 'Advertising that enhances experiences'
description: 'Advertising is the price everyone can afford for high-quality content. The problem is that digital ads are often low quality, tarnishing the customer relationship with both the publisher and advertiser. There is an opportunity for online ads to be better; A chance to build trust and value with the audience.'
pubDate: 'April 9 2016'
heroImage: '/img/concert-spot.avif'
heroWide: '/img/concert.avif'
category: 'work'
---

<div class="bento">
  <p class="box">
    <span class="value" style="font-size: 35cqi;">$20M+</span>
    <span class="label">YoY Revenue</span>
  </p>
  <p class="box">
    <span class="value" style="font-size: 35cqi;">90%</span>
    <span class="label">US Audience Reach</span>
  </p>
</div>

Advertising is the price everyone can afford for high-quality content. The problem is that digital ads are often low quality, tarnishing the customer relationship with both the publisher and advertiser. There is an opportunity for online ads to be better; A chance to build trust and value with the audience.

<img src="/img/concert-phone.avif" alt="Concert mobile expereance" style="outline: none; display: block;" />

After prototyping new high-impact storytelling experiences at SB Nation in 2012, I identified a problem with our standard ad units. The beautiful layouts we were building were dotted with low-quality advertising, so I designed a new ad unit that was beautiful and responsive, distinguishing itself on the page but not overwhelming the viewer. This prototype was affectionately dubbed the “fishtank” ad, and it encapsulated a brand experience that you could peer into. A little slice of the page a brand could build a world in. An idea that grew into the Concert ad platform.

<div class="athena">
  <div class="desktop">
    <a href="javascript:activate(sidebar);" class="dot" style="top:89%;left:65%;"><img src="/img/athena/thumb.avif" /></a>
    <a href="javascript:activate(sidebar);" class="dot" style="top:40%;left:25%;"><img src="/img/athena/thumb.avif" /></a>
    <a href="javascript:activate(sidebar);" class="dot" style="top:19%;left:44%;"><img src="/img/athena/thumb.avif" /></a>
    <a href="javascript:activate(sidebar);" class="dot" style="top:47%;left:43%;"><img src="/img/athena/thumb.avif" /></a>
    <a href="javascript:activate(sidebar);" class="dot" style="top:82%;left:12%;"><img src="/img/athena/thumb.avif" /></a>
    <a href="javascript:activate(sidebar);" class="dot" style="top:30%;left:84%;"><img src="/img/athena/thumb.avif" /></a>
    <a href="javascript:activate(sidebar);" class="dot" style="top:90%;left:36%;"><img src="/img/athena/thumb.avif" /></a>
  </div>
  <div class="mobile">
    <a href="javascript:activate(sidebar);" class="dot" style="top:89%;left:65%;"><img src="/img/athena/thumb.avif" /></a>
    <a href="javascript:activate(sidebar);" class="dot" style="top:40%;left:25%;"><img src="/img/athena/thumb.avif" /></a>
    <a href="javascript:activate(sidebar);" class="dot" style="top:19%;left:44%;"><img src="/img/athena/thumb.avif" /></a>
    <a href="javascript:activate(sidebar);" class="dot" style="top:47%;left:43%;"><img src="/img/athena/thumb.avif" /></a>
    <a href="javascript:activate(sidebar);" class="dot" style="top:82%;left:12%;"><img src="/img/athena/thumb.avif" /></a>
    <a href="javascript:activate(sidebar);" class="dot" style="top:45%;left:84%;"><img src="/img/athena/thumb.avif" /></a>
    <a href="javascript:activate(sidebar);" class="dot" style="top:90%;left:36%;"><img src="/img/athena/thumb.avif" /></a>
  </div>
  <div class="sidebar">
    <a href="javascript:activate(sidebar);" class="bkg"></a>
    <a href="javascript:activate(sidebar);" class="close"><svg class="closeSVG" viewBox="0 0 40 40"><title>close</title><line class="a" x1="9.4" y1="9.4" x2="30.6" y2="30.6"/><line class="a" x1="30.6" y1="9.4" x2="9.4" y2="30.6"/></svg></a>
    <img src="/img/athena/sidebar.avif" alt=" " />
  </div>
</div>

<p class="caption">Prototype ad for the Concert ad platform</p>

<style>
.athena {
  width: 100%;
  height: 0;
  padding-bottom: 55.66038%;
  position: relative;
  background-color: #000;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  background-image: url("/img/athena/bkg.avif");
  border-radius: 0.5rem;
  overflow: hidden;
}

.sidebar img {
  position: absolute;
  right: 6px;
  bottom: 6px;
  height: calc(100% - 12px);
  width: auto;
  transform: translateX(100%);
  opacity: 0;
  transition: all 0.2s ease-out;
  box-shadow: 0 0 6px #000;
  z-index: 3;
}
.sidebar .bkg {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  transition: all 0.4s ease-out;
  opacity: 0;
  pointer-events: none;
  z-index: 2;
  margin: 0 !important;
}
.sidebar .close {
  position: absolute;
  top: 3%;
  right: calc(38.5% + 6px);
  height: 0;
  width: 4%;
  padding-bottom: 4%;
  background-color: #fff;
  border-radius: 50%;
  z-index: 4;
  transition: all 0.4s cubic-bezier(0.5, 0, 0.4, 1.5);
  box-shadow: 0 0 6px #000;
  transform: scale(0);
  opacity: 0;
  transition-delay: 0.2s;
}
.sidebar.active img {
  opacity: 1;
  transform: none;
}
.sidebar.active .bkg {
  pointer-events: auto;
  opacity: 0.5;
}
.sidebar.active .close {
  transform: scale(1);
  opacity: 1;
}

.closeSVG {
  stroke: #555;
  stroke-width: 4;
}

.dot {
  position: absolute;
  width: 140px;
  height: 140px;
  border: 20px solid #fff;
  filter: drop-shadow(0 0 6px #000);
  border-radius: 50%;
  transform: translate3d(-50%, -50%, 0) scale(0);
  transition: all 0.4s cubic-bezier(0.5, 0, 0.4, 1.5);
  overflow: hidden;
}
.dot.active {
  transform: translate3d(-50%, -50%, 0) scale(0.25);
}
.dot img {
  width: 100%;
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.5, 0, 0.4, 1.5);
}
.dot:hover {
  border-width: 2px;
  transform: translate3d(-50%, -50%, 0) scale(1);
  z-index: 1;
}
.dot:hover img {
  opacity: 1;
}

.products {
  position: absolute;
  overflow: auto;
  top: 37.3%;
  bottom: 0;
  left: 0;
  right: 0;
  display: none;
  flex-direction: column;
  align-content: flex-start;
  flex-wrap: wrap;
}
@media (max-width: 640px) {
  .products {
    display: flex;
  }
}
.products img {
  flex: 1;
  height: 50%;
  max-height: 50%;
  display: block;
  float: left;
}
</style>

<script>
var dots = document.querySelectorAll('.dot');
var sidebar = document.querySelector('.sidebar');

setTimeout(function () {
  var counter = 0;
  function next() {
    if (counter++ < dots.length) {
      activate(dots[counter - 1]);
      setTimeout(next, 100);
    }
  }
  next();
}, 600);

function activate(e) {
  e.classList.toggle('active');
}
</script>

In 2016 I rejoined the Concert team to expand the reach of the ad platform, reaching over 90% of the US online audience and driving over $20M YoY in revenue. To achieve this scale we brought our ad suite to over 80 outside publications including Condé Nast, Comcast, and NBC.