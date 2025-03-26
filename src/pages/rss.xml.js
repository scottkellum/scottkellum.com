import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
	const work = (await getCollection('work')).sort(
		(b, a) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()
	);	
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		stylesheet: '/rss.xsl',
		javascript: '/rss.js',
		favicon: '/favicon.svg',
		items: work.map((post) => ({
			content: sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
      }),
			...post.data,
			link: post.data.category === 'work' 
				? `/portfolio/${post.slug}/` 
				: `/writing/${post.slug}/`,
		})),
	});
}