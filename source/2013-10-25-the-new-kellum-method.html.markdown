---
title: The new Kellum method
date: 2013-10-25
---

**_This post is no longer fully funcitoning as I have abandon icon fonts on this website_**

It wasn’t that long ago when [Jeffrey Zeldman](https://twitter.com/zeldman) wrote about my [image replacement method](http://www.zeldman.com/2012/03/01/replacing-the-9999px-hack-new-image-replacement/). While I still occasionally use this method, I try to avoid image replacements altogether, but I have been taking a dramatically different approach recently. So what is the goal of image replacement techniques? The goal is to have text without a font showing up. Now that @font-face is supported just about everywhere we can take advantage of it to load a font with characters that have no width and make no marks. Simply calling a font like this will make the text invisible. Early this year [Ken Lunde](https://twitter.com/ken_lunde) and Adobe released [Adobe Blank](http://blogs.adobe.com/typblography/2013/03/introducing-adobe-blank.html) which is just such an invisible font intended to be used during the loading of other CSS fonts. So what does this look like? After initial font include, it’s just one simple line of CSS. For my website the invisible font is `iconfnt` so my CSS for hiding text is just `font-family: iconfnt;`.

<br>

Without `font-family: iconfnt`:

<div style="background: url('/images/editorial/new-kellum-method.jpg')">
	hide this text
</div>

<br>

With `font-family: iconfnt`:

<div style="background: url('/images/editorial/new-kellum-method.jpg'); font-family: iconfnt">
	hide this text
</div>

## Inline block

Image replacement isn’t the only use case for this trick. There are plenty of other places where it can be useful. Remember all the characters have zero width, including spaces. This means if you are displaying things using `inline-block` applying the font to the parent element will result in none of those pesky spaces between the `inline-block` elements.

<br>

Without `font-family: iconfnt`:

<div>
 <div style="display: inline-block; background-color: #aaa;">inline-block</div>
 <div style="display: inline-block; background-color: #aaa;">inline-block</div>
 <div style="display: inline-block; background-color: #aaa;">inline-block</div>
</div>

<br>

With `font-family: iconfnt`:
<div style="font-family: iconfnt;">
 <div style="display: inline-block; background-color: #aaa; font-family: 'Turnip RE', Georgia, serif">inline-block</div>
 <div style="display: inline-block; background-color: #aaa; font-family: 'Turnip RE', Georgia, serif">inline-block</div>
 <div style="display: inline-block; background-color: #aaa; font-family: 'Turnip RE', Georgia, serif">inline-block</div>
</div>


## Bundle with icon fonts

I use icon fonts for almost everything these days. So how can this technique work hand-in-hand with them? Take this site as an example. I mapped uppercase characters to various icons and lowercase characters and spaces to blank characters. Instead of typing just `T` (<span style="font-family: iconfnt">T</span>) to call the icon for Twitter, I can type the whole thing out `Twitter` (<span style="font-family: iconfnt">Twitter</span>) and the icon shows up for `T` while `witter` remains hidden. If for some reason the icon font doesn’t load or someone is [using a screen reader](https://vimeo.com/77909274) then the whole word will be there as a fallback.