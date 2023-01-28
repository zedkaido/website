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
    const xml = `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
      xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
      xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:pagemap="http://www.google.com/schemas/sitemap-pagemap/1.0"
      xmlns:xhtml="http://www.w3.org/1999/xhtml">
      <url>
        <loc>${website}</loc>
        <lastmod>2023-01-28</lastmod>
      </url>
      <url>
        <loc>${website}/music</loc>
        <lastmod>2023-01-28</lastmod>
      </url>
      <url>
        <loc>${website}/events</loc>
        <lastmod>2023-01-28</lastmod>
      </url>
      <url>
        <loc>${website}/blog</loc>
        <lastmod>2023-01-28</lastmod>
      </url>
      <url>
        <loc>${website}/socials</loc>
        <lastmod>2023-01-28</lastmod>
      </url>
      ${posts
        .map(
          (post) => `<url>
          <loc>${website}${post.url}</loc>
          <lastmod>${post.updated_date ? post.updated_date : post.date}</lastmod>
          </url>`
        )
        .join('')}
    </urlset>`

    return new Response(xml)
}
