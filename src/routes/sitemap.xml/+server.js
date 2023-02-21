import posts from '$lib/data/posts.json';

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function GET({ setHeaders }) {
    setHeaders({
        'Cache-Control': `max-age=0, s-max-age=600`,
        'Content-Type': 'application/xml'
    })
    const website="https://zedkaido.com"
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${website}</loc>
        <lastmod>2023-02-21</lastmod>
      </url>
      <url>
        <loc>${website}/music</loc>
        <lastmod>2023-02-13</lastmod>
      </url>
      <url>
        <loc>${website}/events</loc>
        <lastmod>2023-01-28</lastmod>
      </url>
      <url>
        <loc>${website}/blog</loc>
        <lastmod>2023-02-21</lastmod>
      </url>
      <url>
        <loc>${website}/socials</loc>
        <lastmod>2023-02-21</lastmod>
      </url>
      <url>
        <loc>${website}/blog/categories/internet</loc>
        <lastmod>2023-02-21</lastmod>
      </url>
      <url>
        <loc>${website}/blog/categories/music-releases</loc>
        <lastmod>2023-02-21</lastmod>
      </url>
      ${posts
        .map(
          (post) => `<url>
          <loc>${website}${post.url}</loc>
          <lastmod>${post.updatedDate ? post.updatedDate : post.date}</lastmod>
          </url>`
        )
        .join('')}
    </urlset>`

  return new Response(xml);
}
