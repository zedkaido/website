import posts from '$lib/data/posts.json';
import tracks from '$lib/data/tracks.json';
import djShows from '$lib/data/dj-shows.json';

/** @typedef {Object} RSSItem
 * @property {string} title
 * @property {string} url
 * @property {string} date
 * @property {string} author
 * @property {string} thumbnail
 */

const website = 'https://zedkaido.com';
const buildRSSItems = (posts, tracks, djShows) => {
	/** @type {RSSItem[]} */
	const items = [];

	posts.forEach((x) => {
		items.push({
			title: x.title,
			url: website + x.url,
			date: x.date,
			author: x.author,
			thumbnail: x.thumbnail
		});
	});

	tracks.forEach((x) => {
		items.push({
			title: x.title,
			url: website + x.link,
			date: x.date,
			thumbnail: x.cover
		});
	});

	djShows.forEach((x) => {
		items.push({
			title: x.title,
			url: website + x.url,
			date: x.date,
			thumbnail: x.cover
		});
	});

	items.sort((a, b) => new Date(b.date) - new Date(a.date));
	return items;
};

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function GET({ setHeaders }) {
	setHeaders({
		'Cache-Control': `max-age=0, s-max-age=600`,
		'Content-Type': 'application/xml'
	});

	const items = buildRSSItems(posts, tracks, djShows);
	const xml = `
		<rss
			xmlns:dc="http://purl.org/dc/elements/1.1/"
			xmlns:media="http://search.yahoo.com/mrss/"
			xmlns:atom="http://www.w3.org/2005/Atom"
			xmlns:nyt="http://www.nytimes.com/namespaces/rss/2.0" version="2.0">

			<channel>
				<title>Zed Kaido</title>
				<link>${website}</link>
				<atom:link href="${website}/rss.xml" rel="self" type="application/rss+xml"/>
				<description>Discover Zed Kaido's little corner of the internet packed with music releases, insights, photography, art and much more!</description>

				${items
					.map(
						(i) => `
				<item>
					${i.title ? `<title>${i.title.replace(/(<([^>]+)>)/gi, ' ')}</title>` : ''}
					${
						i.url
							? `<link>${i.url}</link> <guid isPermaLink="true">${i.url}</guid><atom:link href="${i.url}" rel="standout"/>`
							: ''
					}
					${i.date ? `<pubDate>${new Date(i.date)}</pubDate>` : ''}
					${i.author ? `<dc:creator>${i.author}</dc:creator>` : ''}
					${
						i.thumbnail
							? `<media:content height="151" medium="image" url="${i.thumbnail}" width="151"/>`
							: ''
					}
				</item>`
					)
					.join('')}
			</channel>
		</rss>
	`;

	return new Response(xml);
}
