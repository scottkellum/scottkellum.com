# An argument for clever code

But first, what’s wrong with clever code?

Clever code can be problematic in codebases. It can be hard for others to understand and debug, and as it proliferates it can result in bugs and unintended consequences. Straightforward and consistent code is what the landscape of an easy to maintain codebase looks like.Where to be clever and why?

You can do a lot with CSS now, especially with `calc()` and new units. It’s tempting to get clever with CSS to avoid using JS. There are advantages to doing this. CSS is almost always more performant and more concise than JS. While these tricks or “hacks” may be hard to grok, they can add a lot of functionality.

To avoid the code spaghetti of writing clever bits of code everywhere, you can isolate the clever bits and apply them in a clear and straightforward way. Wrap up functions into custom properties (variables) or utility classes. Isolate the clever bits to a CSS layer. Make a well documented tool for yourself to use instead of reusing a complicated technique across your codebase.

CSS is evolving quickly, and it’s time to start learning and applying lessons from functional programming to what we do. You can do incredible things with CSS. It encourages us to be creative. So write clever code! Just work to encapsulate cleverness in a way that is maintainable.