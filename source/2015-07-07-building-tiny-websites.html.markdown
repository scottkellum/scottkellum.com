---
title: Websites on a 14kb budget
date: 2015-07-07
---

There is plenty of hype now around performance tricks and one of them is inlining critical CSS in the first 14kb of the first request to prevent render blocking. Today that seems like a minuscule amount of space to squeeze into but what if we set 14kb as the bar for our entire site? Is it possible?

## No resets, sensible defaults

For the most part people will shop for a reset _(I’m considering normalize a reset here)_, put it on their site without modification, and call it a day. On a budget we can’t afford any excess so the reset is the first thing to go. Instead write your own base styles and use resets as reference. What tags are you going to use in your site and what do you need the default values to be? More often than not we override reset values further down our stylesheets so this will give you a leaner and better foundation to build on.

## Avoid frameworks

Again, with this budget every line of code is subject to ridicule and removal. Frameworks are great toolboxes but we have no room to ship unused tools to production. In building [modularscale.com](http://www.modularscale.com) on a 14kb budget I even managed to squeeze the javascript into the budget by not using JS frameworks.

## Use EMs

While you may like other units, `em`, not `rem`, not `px` is the clear winner when it comes to efficiency in _most_ but not _all_ situations. Recursion allows you to write typographic and UI styles that can be easily changed depending on the context. The elegance of a single typographic system that you can shrink down for a sidebar or footer with one line of CSS is something the other units can’t do. Start applying this logic to UI elements that you can simply scale with `font-size` and everything inside scales accordingly and you’ll find yourself with an extremely flexible set of styles without writing much extra CSS.

## Author with GZIP in mind

If you’re on this diet it helps to gzip the excess fat away. Gzip works by identifying similar code chunks and consolidating them. Use mixins to ensure repeated code is formatted the same way. When authoring mixins where some values might change make sure all the properties that don’t change are grouped together at the top and properties where the value changes are all at the bottom.

## Re-invent wheels

There are staples of CSS like clearfixes, image replacement hacks, and grid systems. Any code you insert without thought is ripe for innovation. For example, `display: table` and `display: flex` self clear so you can just write that instead of a clearfix in most situations. Grid systems are designed to fit everyones needs but would flexbox fit your needs more simply? This is a really exciting area to work in as it provides opportunities to look more critically at things we take for granted.

## Keep HTML in mind and async all the extras

It’s important to also remember the HTML for your page is included in the 14kb budget. Just scraping by with CSS means you’re going over when you put it in your page. Desigining a good content structure is an important first step to any site and even more critical on a budget. Ultimately, HTML and CSS is all you need to see a page. You can have goodies like JavaScript and web fonts, or even extra CSS, but make sure all those extras load async and don’t block render so folks get the content they came for as fast as possible.

## Caveat

Your site may have different needs. I have been experimenting with these techniques on various sites. 14kb is an extreme bar to hit, one that I only really set on personal projects. Maintainability is incredibly important on larger sites so resets, frameworks, and using more consistent units may be better choices in some situations.