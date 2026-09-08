/**
 * Serves cohort PDFs with an explicit `application/pdf` content type.
 *
 * The static asset layer labels `.pdf` files `application/octet-stream`, which
 * makes browsers download the file instead of rendering it in the inline
 * viewer. Routing them through here keeps them viewable and gives us one place
 * to add access control later.
 */
export async function GET(request: Request, { params }: { params: Promise<{ file: string }> }) {
  const { file } = await params;

  // Reject anything that is not a plain PDF filename, so this cannot be used
  // to reach other assets.
  if (!/^[A-Za-z0-9._-]+\.pdf$/.test(file) || file.includes("..")) {
    return new Response("Not found", { status: 404 });
  }

  const source = new URL(`/assets/cohort-materials/${file}`, request.url);

  let upstream: Response | null = null;
  try {
    upstream = await fetch(source, { headers: rangeHeaders(request) });
  } catch {
    upstream = null;
  }

  // On Cloudflare the static asset layer runs *in front of* this Worker: it
  // already labels PDFs application/pdf, but it cannot be reached from a
  // same-origin subrequest, so the fetch above 404s. Hand the browser straight
  // to the asset instead. Locally the fetch succeeds and we relabel it below,
  // which is what the dev server needs since it calls PDFs octet-stream.
  if (!upstream || (!upstream.ok && upstream.status !== 206)) {
    return Response.redirect(source.toString(), 302);
  }

  const headers = new Headers();
  headers.set("Content-Type", "application/pdf");
  headers.set("Content-Disposition", "inline");
  headers.set("Cache-Control", "public, max-age=3600");
  for (const key of ["content-length", "content-range", "accept-ranges", "etag"]) {
    const value = upstream.headers.get(key);
    if (value) headers.set(key, value);
  }

  return new Response(upstream.body, { status: upstream.status, headers });
}

function rangeHeaders(request: Request) {
  const range = request.headers.get("range");
  return range ? { range } : undefined;
}
