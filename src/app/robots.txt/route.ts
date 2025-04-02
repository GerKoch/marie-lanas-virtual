export function GET() {
  const body = `User-agent: *
Allow: /

Sitemap: https://www.marielanas.com/sitemap.xml`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
