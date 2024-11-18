import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://scottkellum.com',
	integrations: [mdx(), sitemap({
    serialize(item) {
      if (/editorial/.test(item.url)) {
        item.changefreq = 'monthly';
        item.lastmod = new Date();
        item.priority = 0.9;
      }
      if (/ecommerce/.test(item.url)) {
        item.changefreq = 'monthly';
        item.lastmod = new Date();
        item.priority = 0.8;
      }
      if (/federal/.test(item.url)) {
        item.changefreq = 'monthly';
        item.lastmod = new Date();
        item.priority = 0.7;
      }
      if (/solutions-and-ip/.test(item.url)) {
        item.changefreq = 'monthly';
        item.lastmod = new Date();
        item.priority = 0.6;
      }
      if (/about/.test(item.url)) {
        item.changefreq = 'monthly';
        item.lastmod = new Date();
        item.priority = 0.5;
      }
      if (/blog/.test(item.url)) {
        item.changefreq = 'daily';
        item.lastmod = new Date();
        item.priority = 0.4;
      }
      return item;
    },
  })],
  devToolbar: {
    enabled: false
  }
});