---
title: 'How unit division works in CSS, and how to use it today'
description: 'Unit division landed in Safari Technology Preview this week, and it’s powerful stuff! Using a combination of techniques, you can get a fallback working in all browsers while having native unit division ready for when it arrives.'
pubDate: 'Sep 13 2024'
heroImage: '/img/safari-calc-unit-division.avif'
alt: 'A colorful montage with the Safari Technology Preview icon and the text “100vw / 1px”'
category: 'writing'
---

Unit division in CSS has been at the top of my CSS wishlist for years. It allows you to take one value and manipulate it to do something else entirely. This is huge. CSS units may be typed as a `<length>`, `<color>`, `<number>`, or `<angle>`. Unit division allows us to compare and manipulate any type of unit with any other type of unit for the first time. Here at Typetura we use it to take a container width and manipulate it to change the timing of CSS animations, but you might want to use it to manipulate colors, proportions, variable font properties, or percentages without the `<length>` type. To my surprise and delight, [Safari launched unit division in CSS](https://webkit.org/blog/15860/release-notes-for-safari-technology-preview-203/) this week.

But how exactly are we using this feature if it’s only just now released in Safari Technology Preview? For the past few months we have been using [a workaround by Jane Ori](https://dev.to/janeori/css-type-casting-to-numeric-tanatan2-scalars-582j) that uses `tan(atan2())` alongside `@property` to achieve unit division in CSS. This week we released a new version of Typetura.css that uses native unit division when available, and falls back to Jane’s technique when it’s not. Previously we were using a little JS to handle this math.

## Using unit division in CSS

In grade school math class you might have remembered dividing by `x` to solve for an equation. For example, if you have `10x` you can divide by `x` leaving you with `10`. Similarly, if you have `10px` and divide by `1px` you’re left with `10`. Now, you can take this `10` and multiply it by `1deg` to convert it to an `<angle>` or `1s` to convert it to `<time>`.

Another thing to remember is that the denominator always takes precedence in the calculation. For example, if you have `1in / 1px`, the result will be `96`, as 1 CSS inch always equals 96 CSS pixels. CSS converts both the numerator and denominator to the same units as the denominator, then divides the values and removes the units. This is particularly handy when using relative length values. Dividing a relative value by a fixed value, like `100vw / 1px`, will give you the corresponding viewport width as a `<number>` of pixels. You now have a way to manipulate values based on screen width without needing to use JavaScript.

## Changing the background color of a page with the viewport

As a quick example, we can change the background color of a page with this technique. We can convert the viewport width to a number, then convert that to degrees for our HSL value.

```css
html {
	background: hsl(calc(100vw / 1px * 0.2deg), 100%, 80%);
}
```

Currently, this only works in Safari Technology Preview, so let’s add a fallback using [Jane Ori’s technique](https://dev.to/janeori/css-type-casting-to-numeric-tanatan2-scalars-582j). We can isolate a lot of complexity here and use custom properties to run our calculations. Let’s add a `--num`, and `--denom` property to hold our values and run the division calculation in isolation.

```css
/* Division math happens here for when you need it */
* {
	--div: calc(var(--num) / var(--denom));
}

/* Write your styles here */
html {
	--num: 100vw;
	--denom: 1px;
	background: hsl(calc(var(--div) * 0.2deg), 100%, 80%);
}
```

Now that we have our styles well isolated, we can add Jane Ori’s technique to the mix without impacting the area of the stylesheet where we have our page styles.

```css
/* Division math happens here for when you need it */
* {
	--div: calc(var(--num) / var(--denom));
}

/* Fallback support */
@supports not (width: calc(1% / 1px * 1px)) {
	@property --num {
		syntax: "<length>";
		initial-value: 0px;
		inherits: false;
	}
	@property --denom {
		syntax: "<length>";
		initial-value: 0px;
		inherits: false;
	}
	* {
		--NUM: calc(tan(atan2(var(--num),1px)));
		--DENOM: calc(tan(atan2(var(--denom),1px)));
		--div: calc(var(--NUM) / var(--DENOM));
	}
}

/* Write your styles here */
html {
	--num: 100vw;
	--denom: 1px;
	background: hsl(calc(var(--div) * 0.2deg), 100%, 80%);
}
```

<a href="https://codepen.io/scottkellum/pen/ZEdZwLv?editors=1100" target="_blank" class="cta">Edit on CodePen</a>

## Conclusion

Unit division can be a powerful tool, and now that it is available in CSS, it opens up a world of possibilities for developers. It will greatly reduce our reliance on JavaScript for calculations, speeding up page performance. Jane’s fallback is a bit of a hack and should be used with consideration, but this technique of isolating hacks is a great way to start using unit division today with the ability to easily remove the hack in the future when it is no longer needed.