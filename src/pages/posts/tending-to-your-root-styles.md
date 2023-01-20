---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
title: "[Tending] to your [Root Styles]"
publishDate: November 11, 2022
name: Scott Kellum
description: A good foundation makes for excellent typography. To create a solid foundation, put font styles on the root of your document, the html. Deciding when to apply styles to either body or html can be confusing. Styles in both places seem to behave in an identical fashion so why does this even matter? It comes down to three things — managing inheritance, consolidation of inherited styles with viewport styles, and rem sizing.
heroImage: /img/root-of-font-problem.jpg
---

A good foundation makes for excellent typography. To create a solid foundation, put font styles on the root of your document, the `html`. Deciding when to apply styles to either `body` or `html` can be confusing. Styles in both places seem to behave in an identical fashion so why does this even matter? It comes down to three things: managing inheritance, consolidation of inherited styles with viewport styles, and `rem` sizing.

## Consolidation of inherited and viewport styles

`html` and `body` are unusual elements. `html` is the root of your document and `body` holds content that is meant to be rendered. Both follow the box-model and can be given margins, padding, borders, and dimensions, but backgrounds and scroll behavior will be applied to the viewport instead of the boxes drawn the page. That is, unless backgrounds and scroll behavior are defined in both places at which point the `body` will change to behave more like any other block level element. As a result of this strange behavior, [it’s a best practice to always put viewport styles on `html` and not `body`](https://twitter.com/TerribleMia/status/1380310383588646916). Additionally inherited styles start at the root of your document, your `html`. As you should already have a ruleset for `html` to put your page background and any scroll behavior you might have, putting your inherited styles like `font` on `html` makes sense.

## Rem sizing

The unit `rem` stands for “Root EM” and it’s equal to the font size at the root of your document. It’s a CSS constant you can set and then use throughout your design. Setting `font-size` on `html` defines a `rem` but setting `font-size` on `body` does nothing to define a `rem`. A defined rem equal to your body font size can be extremely valuable to in maintaining typographic proportion or in consistently scaling an interface at different breakpoints. This latter point of consistent scaling of the interface I have found extremely helpful as screen sizes become increasingly more diverse. This allows you to easily scale a website down to the size of a watch or up to the size of a large screen with minimal additional styling.

## Managing inheritance

As CSS authors we talk about specificity a lot, but inheritance can cause more headaches when not managed. It doesn’t matter how `!important` we make a style if a child doesn’t inherit it. When inspecting an element to see where a style is coming from, it’s helpful to have as few layers of inheritance as possible, and the most foundational level is the root of the document, your `html`. Unfortunately when a CSS library decides that `body` should be the foundational level to build on, it will steamroll any other styles on `html` and if viewport level styles are defined that conflict with styles on `html`, visual bugs will be created. On projects where inheritance is an issue I write `body { font: inherit !important }` to ensure there are no issues here.

## Font sizing and line height

It’s important to use relative units for your font sizes. As using `rem` to define your `font-size` on `html` would be a little strange because it’s self-referential, use a percentage instead.

```css
html {
  font-size: 100%;
}
```

If you think in pixels, you can convert pixels to a percentage by taking the number of pixels out of a default font size of `16` and multiplying that by `100%`.

```css
html {
  font-size: calc(20 / 16 * 100%);
}
```

Line height should be set as a proportion instead of a fixed pixel based value. This ensures your text will have consistent spacing even when it is a different font size. _Always_ use a unit-less value for `line-height` and it will save you so much pain in the future.

```css
html {
  font-size: calc(20 / 16 * 100%);
  line-height: 1.3;
}
```

Again, if you think in pixels then calc is here to help! Line height / font size will do the trick.

```css
html {
  font-size: calc(20 / 16 * 100%);
  line-height: calc(26 / 20);
}
```

Along with font family, and maybe weight and [width](https://developer.mozilla.org/en-US/docs/Web/CSS/font-stretch), this provides a rock solid foundation for your typography. Elsewhere on your page you can use `rem`  for sizing and everything will remain proportional to the base font size you have set.

## A foundation to build on

With this foundation you can efficiently make changes that will scale all your type styles at once or specific instances while reducing repetitive styles and inheritance complications. On small screens, scaling all your text down uniformly is just a matter of changing the root font size for a small breakpoints. And because you have considered defaults, overrides can be used sparingly where they are necessary.

