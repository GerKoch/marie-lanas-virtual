export function GET() {
  const pages = ["", "hilos", "lanas", "accesorios", "ofertas", "trabajos"];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
      .map(
        (page) => `
  <url>
    <loc>https://marielanas.vercel.app/${page}</loc>
  </url>`
      )
      .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
