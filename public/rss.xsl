<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title>Scott’s RSS styles</title>
        <meta name="viewport" content="width=device-width"/>
				<meta name="color-scheme" content="dark light"/>
				<style>
          @font-face {
            font-family: 'Roslindale';
            src: url('/roslindale.woff2') format('woff2-variations');
            font-weight: 200 800;
            font-stretch: 75% 100%;
            font-style: normal italic;
            font-display: swap;
          }
          @font-face {
            font-family: 'Gamay';
            src: url('/gamay-expanded-medium.woff2') format('woff2');
            font-weight: 500;
            font-stretch: expanded;
            font-style: normal;
            font-display: swap;
          }

          html {
            --foreground: #142226;
            --background: #fff;

            --primary: #129681;
            --primary-dark: #085147;
            --accent: #fff3f0;
            --accent-dark: #ffe3dc;

            --actoin-light: #ffbc64;
            --action-dark: #8e5000;
            --action-neutral: #f5920f;
            --action: var(--action-dark);
            --warning: #ba0d04;
            --pink: #E01C82;
            --blue: #0FA1CF;

            --blend: multiply;

            --width: 50rem;

            --font: Roslindale, serif;
            --gamay: Gamay, system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

            font-family: var(--font);
            color: var(--foreground);
            background-color: var(--background);
            font-size: 115%;
            line-height: 1.45;

            width: 90%;
            max-width: var(--width);
            margin: 2rem auto;

            font-variation-settings: 'opsz' 10;

            font-size-adjust: from-font;
          }

          @media (prefers-color-scheme: dark) {
            html {
              --foreground: #fff;
              --background: #080f0e;
            
              --primary: #FFD9CE;
              --primary-dark: #FFEBE5;
              --accent: #08201d;
              --accent-dark: #00473a;
            
              --action: var(--actoin-light);
              --warning: #ff827b;
              --pink: #E01C82;
              --blue: #0FA1CF;

              --blend: screen;
            }
          }

          h1, h2, h3 {
            font-size: 1rem;
            color: var(--primary-dark);
            font-variation-settings: normal;
            margin-block: 0;
            line-height: 1.1;
          }
          h1, h2, .homelink {
            font-family: var(--gamay);
            font-weight: 500;
            font-size: 0.9rem;
          }
          h2 {
            margin-block: 2rem 1rem;
          }
          h3 {
            font-size: 1.5rem;
            font-weight: 700;
            font-stretch: 70%;
          }

          p {
            margin-block: 0.5rem;
          }

          article {
            border-block-start: 1px solid var(--accent-dark);
            margin-block: 1rem;
            padding-block: 1rem 0;
          }

          .date {
            color: var(--primary-dark);
            font-size: 0.7rem;
            font-family: var(--gamay);
          }

          a {
            color: var(--primary-dark);
            text-decoration-thickness: 0.1rem;
            text-underline-offset: 0.1em;
            text-decoration-color: var(--action-neutral);
            text-decoration-style: dotted;
          }
          a:hover, a:focus {
            color: var(--action);
            text-decoration-style: solid;
          }

          code {
            background-color: var(--accent);
            padding: 0.2rem 0.4rem;
            border-radius: 0.2rem;
            cursor: pointer;
            display: block;
            width: fit-content;
            margin-block: 1rem;
            color: var(--action);
          }
          code::after {
            content: ' — click to copy';
            font-size: 0.67rem;
            color: var(--primary-dark);
            font-family: var(--gamay);
          }
          :focus {
            border-radius: 0.1px;
            outline: 2px solid var(--action-neutral);
            outline-offset: 2px;
          }
				</style>
      </head>
      <body>
				<header>
					<h1>Scott Kellum’s RSS Feed</h1>
          <code onClick="navigator.clipboard.writeText('https://scottkellum.com/rss.xml')">https://scottkellum.com/rss.xml</code>
					<p><xsl:value-of select="/rss/channel/description"/></p>
					<a class="homelink">
						<xsl:attribute name="href">
							<xsl:value-of select="/rss/channel/link"/>
						</xsl:attribute>
						Visit Website &#x2192;
					</a>
				</header>
				<main>
					<h2>Recent posts</h2>
					<xsl:for-each select="/rss/channel/item">
						<article>
							<h3>
								<a>
									<xsl:attribute name="href">
										<xsl:value-of select="link"/>
									</xsl:attribute>
									<xsl:value-of select="title"/>
								</a>
							</h3>
							<p class="date"><xsl:value-of select="pubDate" /></p>
              <div class="description"><xsl:value-of select="description" /></div>
						</article>
					</xsl:for-each>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
