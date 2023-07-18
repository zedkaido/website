import djShows from '$lib/data/dj-shows.json';

const website = 'https://zedkaido.com';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function GET({ setHeaders }) {
	setHeaders({
		'Cache-Control': `max-age=0, s-max-age=600`,
		'Content-Type': 'application/xml'
	});

	djShows.sort((a, b) => b.id - a.id);

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
	<rss xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd" version="2.0">
		<channel>
			<title>Zed Kaido</title>
			<link>${website}</link>
			<description>Accompany me on a quest through the vast expanse of space and the melodious realm of sound, a journey that shall make thighs sway, hips groove and heads wobble with mirth.</description>
			<itunes:author>Zed Kaido</itunes:author>
			<itunes:image href="${website}/podcast/thumbnail.webp" />
			<itunes:category text="Music" />
			<language>en-us</language>
			<itunes:explicit>no</itunes:explicit>
			<itunes:owner>
				<itunes:name>Zed Kaido</itunes:name>
				<itunes:email>dj@zedkaido.com</itunes:email>
			</itunes:owner>

			${djShows
				.map(
					(show) => `
				<item>
						${show.title ? `<title>${show.title}</title>` : ''}
						${show.description ? `<description>${show.description}</description>` : ''}
						${show.date ? `<pubDate>${new Date(show.date).toUTCString()}</pubDate>` : ''}
						${show.url ? `<link>${website}${show.url}</link>` : ''}
						${show.audio ? `<enclosure url="${website}${show.audio}" length="0" type="audio/mpeg" />` : ''}
						${show.thumbnail ? `<itunes:image href="${website}${show.thumbnail}" />` : ''}
						${show.duration ? `<itunes:duration>${show.duration}</itunes:duration>` : ''}
				</item>`
				)
				.join('')}
		</channel>
	</rss>`;

	return new Response(xml);
}
